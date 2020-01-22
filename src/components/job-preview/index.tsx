import React from 'react'
import cs from 'classnames'
import { Job } from '~/generated/codegen'
import Avatar from '../avatar'

export interface JobPreviewProps {
  className?: string
  job: Partial<Job>
}

const JobPreview: React.FC<JobPreviewProps> = ({
  className,
  job,
  ...props
}) => {
  const secondTag = job.cities?.[0]?.name ?? job.commitment?.title

  return (
    <div
      role="button"
      className={cs('flex rounded-xl bg-white p-4 shadow', className)}
      {...props}
    >
      <Avatar text={job.company.name} />
      <div className="flex flex-col justify-between">
        <div className="text-gray-800 font-medium">{job.title}</div>
        <div className="flex text-gray-600 text-xs items-center">
          <span className="mr-4">{job.company.name}</span>
          {secondTag && (
            <>
              <span className="mr-4 w-8 bg-gray-600" style={{ height: 1 }} />
              <span>{secondTag}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobPreview
