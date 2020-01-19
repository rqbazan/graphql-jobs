import React from 'react'
import cs from 'classnames'

export interface FieldProps {
  component: React.ReactNode
  label: string
  className?: string
}

const Field: React.FC<FieldProps> = ({ label, component, className }) => {
  return (
    <div className={cs('flex flex-col', className)}>
      <div className="mb-2 font-medium">{label}</div>
      {component}
    </div>
  )
}

export default Field
