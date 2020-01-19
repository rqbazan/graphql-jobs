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
  )
}

export default SearchBarDesktopProps
