import React from 'react'
import cs from 'classnames'

export interface FABProps {
  className?: string
  style?: React.CSSProperties
}

const FAB: React.FC<FABProps> = ({ children, className, style }) => {
  return (
    <button
      type="button"
      style={style}
      className={cs(
        'bg-secondary text-white font-semibold px-6 h-10 rounded-full shadow-md focus:outline-none z-20',
        className
      )}
    >
      {children}
    </button>
  )
}

export default FAB
