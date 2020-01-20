import {
  SetSearchArgsMutationVariables,
  QuerySearchJobsArgs,
  Job,
  SearchArgsInput
} from '@codegen'
import getSearchArgsQuery from './queries/get-search-args'
import remoteJobsQuery from './queries/remote-jobs'
import countryJobsQuery from './queries/country-jobs'
import companyJobsQuery from './queries/company-jobs'

// TODO: improve Context type

interface Context {
  client: any
  cache: any
  getCacheKey: any
}

export interface Resolver<R, A = { [key: string]: any }, P = {}> {
  (parent: P, args: A, ctx: Context): R | Promise<R>
}

const setSearchArgs: Resolver<boolean, SetSearchArgsMutationVariables> = (
  _,
  { input },
  { cache }
) => {
  try {
    const { searchArgs } = cache.readQuery({ query: getSearchArgsQuery })

    cache.writeData({
      data: {
        getSearchArgs: {
          __typename: 'SearchArgs',
          ...searchArgs,
          ...input
        }
      }
    })

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

function getOrderBy(searchArgs: SearchArgsInput) {
  return searchArgs.orderByCreatedAt ? 'postedAt_ASC' : 'postedAt_DESC'
}

async function fetchRemoteJobs(client: any, searchArgs: SearchArgsInput) {
  const orderBy = getOrderBy(searchArgs)

  const { data: remoteJobsData } = await client.query({
    query: remoteJobsQuery,
    variables: { orderBy, where: { title_contains: searchArgs.term } }
  })

  return remoteJobsData.remotes[0].jobs
}

async function fetchCountryJobs(client: any, searchArgs: SearchArgsInput) {
  const orderBy = getOrderBy(searchArgs)

  const { data: countryJobsData } = await client.query({
    query: countryJobsQuery,
    variables: {
      orderBy,
      countrySlug: searchArgs.countrySlug,
      where: { title_contains: searchArgs.term }
    }
  })

  return countryJobsData.country.jobs
}

async function fetchCompanyJobs(client: any, searchArgs: SearchArgsInput) {
  const orderBy = getOrderBy(searchArgs)

  const { data: companyJobsData } = await client.query({
    query: companyJobsQuery,
    variables: {
      orderBy,
      where: { title_contains: searchArgs.term }
    }
  })

  const company = companyJobsData?.companies?.find(
    ({ slug }) => slug === searchArgs.companySlug
  )

  return company?.jobs
}

async function fetchJobs(client: any, searchArgs: SearchArgsInput) {
  const orderBy = getOrderBy(searchArgs)

  const { data: countryJobsData } = await client.query({
    query: countryJobsQuery,
    variables: {
      orderBy,
      countrySlug: searchArgs.countrySlug,
      where: {
        title_contains: searchArgs.term,
        company: { slug: searchArgs.companySlug }
      }
    }
  })

  return countryJobsData.country.jobs
}

const searchJobs: Resolver<Job[], QuerySearchJobsArgs> = async (
  _,
  { input: searchArgs },
  { client }
) => {
  if (!searchArgs.countrySlug && !searchArgs.companySlug) {
    return fetchRemoteJobs(client, searchArgs)
  }

  if (searchArgs.countrySlug && searchArgs.companySlug) {
    return fetchJobs(client, searchArgs)
  }

  if (searchArgs.countrySlug && !searchArgs.companySlug) {
    return fetchCountryJobs(client, searchArgs)
  }

  if (!searchArgs.countrySlug && searchArgs.companySlug) {
    return fetchCompanyJobs(client, searchArgs)
  }

  return []
}

export default {
  Mutation: {
    setSearchArgs
  },
  Query: {
    searchJobs
  }
}
