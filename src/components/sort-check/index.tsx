import React from 'react'
import cs from 'classnames'
import Icon from '../icon'
import './styles.css'

export type SortCheckProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
}

const SortCheck: React.FC<SortCheckProps> = ({ name, className, ...props }) => {
  return (
    <label htmlFor={name} className={cs('sort-check', className)}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className="hidden"
        {...props}
      />
      <div className="sort-check--icon">
        <Icon name="sort" />
      </div>
    </label>
  )
}

export default SortCheck
