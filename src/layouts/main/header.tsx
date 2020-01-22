import React from 'react'
import cs from 'classnames'
import './styles.css'

export interface HeaderProps {
  className?: string
}

export type HeaderType = React.FC<HeaderProps>

const Header: HeaderType = ({ children, className }) => {
  return (
    <div className={cs('header', className)}>
      <a
        href="/"
        className="h-12 w-12 md:h-16 md:w-16 absolute top-0 right-0 mt-6 mr-6"
      >
        <img src="/logo.png" alt="logo" />
      </a>
      <div className="px-6 md:px-0 md:w-full md:max-w-2xl md:mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Header
