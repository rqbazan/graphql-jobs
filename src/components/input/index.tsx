import React from 'react'
import cs from 'classnames'
import './styles.css'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const Input: React.FC<InputProps> = ({ icon = null, className, ...props }) => {
  return (
    <div className={cs('flex items-center relative', className)}>
      {!!icon && <div className="input--icon">{icon}</div>}
      <input
        className="input"
        spellCheck="false"
        autoComplete="off"
        {...props}
      />
    </div>
  )
}

export default Input
