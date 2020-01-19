import React from 'react'
import MainLayout from '~/layouts/main'
import Avatar from '~/components/avatar'

const JobPage = () => {
  return (
    <MainLayout showBackIcon>
      <MainLayout.Content className="-mt-10">
        <Avatar className="h-20 w-20" />
      </MainLayout.Content>
    </MainLayout>
  )
}

export default JobPage
