import React from 'react'
import JobPreview from './index'

export default { title: 'JobPreview' }

export const Default = () => {
  return (
    <JobPreview
      job={
        {
          title: 'Apollo Solutions Architect',
          commitment: {
            title: 'Full-time'
          },
          cities: [
            {
              id: 'cjtu8et7j001a0824jwrtf4d1',
              name: 'San Francisco'
            }
          ],
          company: {
            id: 'cjtu8etmr001n0824o1v2qvgr',
            name: 'Apollo',
            logoUrl: 'https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5'
          }
        } as any
      }
    />
  )
}
