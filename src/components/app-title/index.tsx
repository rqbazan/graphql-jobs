import React from 'react'
import cs from 'classnames'

export interface AppTitleProps {
  className?: string
}

const AppTitle: React.FC<AppTitleProps> = ({ className }) => {
  return (
    <h1 className={cs('font-medium text-2xl', className)}>
      Search <br className="md:hidden" />{' '}
      <strong className="font-bold">GraphQL</strong> Jobs
    </h1>
  )
}

export default AppTitle
