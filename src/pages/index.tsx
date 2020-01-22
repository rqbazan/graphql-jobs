import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {
  useRefDataQuery,
  useSearchArgsQuery,
  useJobsQuery,
  Country,
  Company,
  SearchArgs,
  Job
} from '@codegen'
import { NetworkStatus } from 'apollo-client'
import SearchBar from '~/components/search-bar'
import JobPreview from '~/components/job-preview'
import AppTitle from '~/components/app-title'
import MainLayout from '~/layouts/main'
import Spinner from '~/components/spinner'
import withApollo from '~/hocs/with-apollo'

const AdvancedSearch = dynamic(() => import('~/components/advanced-search'))

// FIXME: col-gap-4 row-gap-4 not working

interface IndexPageProps {
  openAdvancedSearch(): void
  countries: Partial<Country>[]
  companies: Partial<Company>[]
  searchArgs: SearchArgs
  jobs: Partial<Job>[]
  jobsLoading: boolean
  jobsNetworkStatus: NetworkStatus
}

const IndexPage: React.FC<IndexPageProps> = ({
  openAdvancedSearch,
  searchArgs,
  countries,
  companies,
  jobs,
  jobsLoading,
  jobsNetworkStatus
}) => {
  const [isTyping, setIsTyping] = React.useState(false)

  React.useEffect(() => {
    if (jobsNetworkStatus === NetworkStatus.ready) {
      setIsTyping(false)
    }
  }, [jobs, jobsNetworkStatus])

  return (
    <MainLayout>
      <MainLayout.Header>
        <div className="md:text-center">
          <AppTitle className="pb-8" />
        </div>
      </MainLayout.Header>
      <MainLayout.Content className="-mt-5">
        <SearchBar.Mobile
          placeholder="e.g.: Mobile Engineer"
          className="flex md:hidden"
          onTuneClick={openAdvancedSearch}
          onChange={() => setIsTyping(true)}
        />
        <SearchBar.Desktop
          placeholder="e.g.: Mobile Engineer"
          className="hidden md:flex"
          countries={countries}
          companies={companies}
          defaultValues={searchArgs}
          onChange={() => setIsTyping(true)}
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-6 relative"
          style={{ gridColumnGap: '1rem', gridRowGap: '1rem' }}
        >
          {isTyping || jobsLoading ? (
            <div
              className="absolute top-0 transform -translate-x-1/2 mt-8"
              style={{ left: '50%' }}
            >
              <Spinner />
            </div>
          ) : (
            jobs.map(job => (
              <Link
                key={job.id}
                as={`/${job.company.slug}/${job.slug}`}
                href="/[company]/[job]"
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a>
                  <JobPreview job={job} className="col-span-1" />
                </a>
              </Link>
            ))
          )}
        </div>
      </MainLayout.Content>
    </MainLayout>
  )
}

const IndexPageContainer = () => {
  const {
    data: searchArgsData,
    loading: searchArgsLoading
  } = useSearchArgsQuery()

  const { data: refData, loading: refDataLoading } = useRefDataQuery()

  const {
    data: jobsData,
    loading: jobsLoading,
    networkStatus: jobsNetworkStatus
  } = useJobsQuery({
    variables: { input: searchArgsData?.searchArgs },
    skip: searchArgsLoading
  })

  const [showAdvancedSearch, setShowAdvancedSearch] = React.useState(false)

  if (refDataLoading || searchArgsLoading) {
    return <Spinner fullscreen />
  }

  const { searchArgs } = searchArgsData
  const { countries, companies } = refData

  if (showAdvancedSearch) {
    return (
      <AdvancedSearch
        onClose={() => setShowAdvancedSearch(false)}
        countries={countries}
        companies={companies}
        defaultValues={searchArgs}
      />
    )
  }

  return (
    <IndexPage
      openAdvancedSearch={() => setShowAdvancedSearch(true)}
      countries={countries}
      companies={companies}
      searchArgs={searchArgs}
      jobs={jobsData?.jobs ?? []}
      jobsLoading={jobsLoading}
      jobsNetworkStatus={jobsNetworkStatus}
    />
  )
}

export default withApollo(IndexPageContainer)
