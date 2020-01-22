import React from 'react'
import cs from 'classnames'
import './styles.css'

export interface SpinnerProps {
  fullscreen?: boolean
  className?: string
}

const Spinner: React.FC<SpinnerProps> = ({ fullscreen, className }) => {
  if (!fullscreen) {
    return <div className="spinner" />
  }

  return (
    <div
      className={cs(
        'fixed transform -translate-y-1/2 -translate-x-1/2',
        className
      )}
      style={{ left: '50%', top: '50%' }}
    >
      <div className="spinner" />
    </div>
  )
}

export default Spinner
