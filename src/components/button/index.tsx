import React from 'react'

const Button: React.FC = props => {
  return (
    <button type="button" className="p-6 bg-red-400" {...props}>
      Hello there
    </button>
  )
}

export default Button
