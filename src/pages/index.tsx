import React from 'react'
import SearchBar from '~/components/search-bar'
import JobPreview from '~/components/job-preview'
import AppTitle from '~/components/app-title'
import MainLayout from '~/layouts/main'

// FIXME: col-gap-4 row-gap-4 not working

const IndexPage = () => {
  return (
    <MainLayout title={<AppTitle className="pb-8" />}>
      <MainLayout.Content className="-mt-5">
        <SearchBar.Mobile className="flex md:hidden" />
        <SearchBar.Desktop className="hidden md:flex" />
        <div
          className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-6"
          style={{ gridColumnGap: '1rem', gridRowGap: '1rem' }}
        >
          {Array.from({ length: 50 }).map(() => (
            <JobPreview className="col-span-1" />
          ))}
        </div>
      </MainLayout.Content>
    </MainLayout>
  )
}

export default IndexPage
