import { SearchArgsInput, Job, QuerySearchJobsArgs } from '@codegen'
import { Resolver, Context } from '~/types'
import remoteJobsQuery from '~/graphql/queries/remote-jobs'
import countryJobsQuery from '~/graphql/queries/country-jobs'
import companyJobsQuery from '~/graphql/queries/company-jobs'

function getOrderBy(searchArgs: SearchArgsInput) {
  return searchArgs.orderByCreatedAt ? 'postedAt_ASC' : 'postedAt_DESC'
}

async function fetchRemoteJobs(
  client: Context['client'],
  searchArgs: SearchArgsInput
) {
  const orderBy = getOrderBy(searchArgs)

  const { data: remoteJobsData } = await client.query({
    query: remoteJobsQuery,
    variables: { orderBy, where: { title_contains: searchArgs.term } }
  })

  return remoteJobsData.remotes[0].jobs
}

async function fetchCountryJobs(
  client: Context['client'],
  searchArgs: SearchArgsInput
) {
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

async function fetchCompanyJobs(
  client: Context['client'],
  searchArgs: SearchArgsInput
) {
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

async function fetchJobs(
  client: Context['client'],
  searchArgs: SearchArgsInput
) {
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
  try {
    const { countrySlug, companySlug } = searchArgs

    if (!countrySlug && !companySlug) {
      return fetchRemoteJobs(client, searchArgs)
    }

    if (countrySlug && companySlug) {
      return fetchJobs(client, searchArgs)
    }

    if (countrySlug && !companySlug) {
      return fetchCountryJobs(client, searchArgs)
    }

    if (!countrySlug && companySlug) {
      return fetchCompanyJobs(client, searchArgs)
    }

    return []
  } catch (error) {
    console.log(error)
    return []
  }
}

export default searchJobs
