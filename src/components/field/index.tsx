import React from 'react'
import cs from 'classnames'

export interface FieldProps {
  component: React.ReactNode
  label: string
  inline?: boolean
  className?: string
}

const Field: React.FC<FieldProps> = ({
  label,
  inline = false,
  component,
  className
}) => {
  return (
    <div
      className={cs(
        'flex',
        {
          'flex-row justify-between items-center': inline,
          'flex-col': !inline
        },
        className
      )}
    >
      <div className="mb-2 font-medium">{label}</div>
      {component}
    </div>
  )
}

export default Field
