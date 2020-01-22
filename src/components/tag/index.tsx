import React from 'react'
import cs from 'classnames'

export interface TagProps {
  className?: string
}

const Tag: React.FC<TagProps> = ({ children, className }) => {
  return (
    <span
      className={cs(
        'inline-flex bg-black text-white px-2 py-1 rounded-full text-xs',
        className
      )}
    >
      {children}
    </span>
  )
}

export default Tag
