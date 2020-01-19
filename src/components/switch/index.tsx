import React from 'react'
import './styles.css'

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
}

const Switch: React.FC<SwitchProps> = props => {
  const { name } = props

  return (
    <label htmlFor={name} className="switch" style={{ width: 62 }}>
      <input id={name} type="checkbox" className="hidden" {...props} />
      <div className="switch--background">
        <div className="switch--circle" />
      </div>
    </label>
  )
}

export default Switch
