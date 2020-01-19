import React from 'react'
import cs from 'classnames'

export interface JobPreviewProps {
  className?: string
}

const JobPreview: React.FC<JobPreviewProps> = ({ className }) => {
  return (
    <div className={cs('flex rounded-xl bg-white p-4 shadow', className)}>
      <div className="mr-2 rounded-1/2 bg-red-400 h-12 w-12" />
      <div className="flex flex-col justify-between">
        <div className="text-gray-800 font-medium">
          Senior Fullstack Engineer
        </div>
        <div className="flex text-gray-600 text-xs items-center">
          <span className="mr-4">Segment</span>
          <span className="mr-4 w-8 bg-gray-600" style={{ height: 1 }} />
          <span>Segment</span>
        </div>
      </div>
    </div>
  )
}

export default JobPreview
