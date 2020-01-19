import React from 'react'
import cs from 'classnames'
import Icon from '../icon'

export interface SelectProps {
  prompt?: string
  className?: string
}

const Select: React.FC<SelectProps> = ({ prompt, children, className }) => {
  return (
    <div
      className={cs(
        'flex bg-white relative h-10 items-center shadow rounded-full',
        className
      )}
    >
      <select className="bg-transparent appearance-none focus:outline-none w-full pl-4 pr-10 h-full">
        <option value="" hidden>
          {prompt}
        </option>
        {children}
      </select>
      <Icon
        name="cheveron-down"
        className="absolute right-0 mr-4 pointer-events-none"
      />
    </div>
  )
}

export default Select
