import React from 'react'
import cs from 'classnames'
import Select from '../select'
import Input from '../input'
import Icon from '../icon'

export interface SearchBarMobileProps {
  className?: string
}

const SearchBarDesktopProps: React.FC<SearchBarMobileProps> = () => {
  return (
    <div className="flex">
      <div className="flex-1 flex">
        <Input
          className="w-1/2 rounded-r-none z-10"
          icon={<Icon name="search" />}
        />
        <Select
          prompt="Country"
          className="w-1/4 rounded-t-none rounded-b-none border-r border-l border-gray-300"
        >
          <option>USA</option>
          <option>Germany</option>
          <option>China</option>
        </Select>
        <Select prompt="Company" className="w-1/4 rounded-l-none z-10">
          <option>Facebook</option>
          <option>Google</option>
          <option>Segment</option>
        </Select>
      </div>
      <div
        role="button"
        className="flex items-center justify-center bg-white rounded-1/2 h-10 w-10 ml-4 shadow"
      >
        <Icon name="sort" />
      </div>
    </div>
  )
}

export default SearchBarDesktopProps
