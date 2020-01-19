import React from 'react'
import cs from 'classnames'
import Input from '../input'
import Icon from '../icon'

export interface SearchBarMobileProps {
  className?: string
}

const SearchBarMobile: React.FC<SearchBarMobileProps> = ({ className }) => {
  return (
    <div className={cs('flex', className)}>
      <Input className="flex-1" icon={<Icon name="search" />} />
      <div
        role="button"
        className="flex items-center justify-center bg-white rounded-1/2 h-10 w-10 ml-4 shadow"
      >
        <Icon name="tune" />
      </div>
    </div>
  )
}

export default SearchBarMobile
