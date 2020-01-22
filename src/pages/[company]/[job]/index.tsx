import React from 'react'
import { NextPage } from 'next'
import { useJobQuery, Job } from '@codegen'
import ReactMarkdown from 'react-markdown'
import MainLayout from '~/layouts/main'
import Avatar from '~/components/avatar'
import withApollo from '~/hocs/with-apollo'
import Tag from '~/components/tag'
import FAB from '~/components/fab'
import Spinner from '~/components/spinner'

interface JobPageContainerProps {
  jobSlug: string
  companySlug: string
}

interface JobPageProps {
  job: Partial<Job>
}

const ListItem: React.FC = ({ children }) => {
  return (
    <li>
      <span className="pr-2">•</span> {children}
    </li>
  )
}

const JobPage: React.FC<JobPageProps> = ({ job }) => {
  return (
    <MainLayout showBackIcon>
      <MainLayout.Content className="-mt-10">
        <Avatar
          className="h-20 w-20 text-2xl shadow-sm"
          text={job.company.name}
          imageUrl={job.company.logoUrl}
        />
        <div className="mt-4" style={{ marginBottom: '5.5rem' }}>
          <h1 className="text-2xl font-medium">{job.title}</h1>
          {job.tags && (
            <div key={job.id} className="mt-2 -ml-1">
              {job.tags.map(tag => (
                <Tag key={tag.id} className="m-1 last:mr-0">
                  {tag.name}
                </Tag>
              ))}
            </div>
          )}
          <div className="mt-4 markdown">
            <h2 className="mb-2 block text-xl font-medium text-title">
              Overview
            </h2>
            <ReactMarkdown
              source={job.description}
              renderers={{ listItem: ListItem }}
            />
          </div>
        </div>
      </MainLayout.Content>
      <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
        <FAB
          className="fixed bottom-0 mb-6 transform -translate-x-1/2"
          style={{ left: '50%' }}
        >
          Apply for this job
        </FAB>
      </a>
    </MainLayout>
  )
}

const JobPageContainer: NextPage<JobPageContainerProps> = ({
  jobSlug,
  companySlug
}) => {
  const { data, loading } = useJobQuery({ variables: { jobSlug, companySlug } })

  if (loading) {
    return <Spinner fullscreen />
  }

  return <JobPage job={data.job} />
}

JobPageContainer.getInitialProps = ({ query }) => {
  return {
    jobSlug: query.job as string,
    companySlug: query.company as string
  }
}

export default withApollo(JobPageContainer)
