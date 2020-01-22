import React from 'react'
import Router from 'next/router'
import Icon from '~/components/icon'
import Content, { ContentType } from './content'
import './styles.css'

export interface MainLayoutProps {
  title?: React.ReactNode
  showBackIcon?: boolean
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> & {
  Content: ContentType
} = ({ children, title, showBackIcon = false }) => {
  return (
    <div className="flex flex-col">
      <div className="header">
        <a
          href="/"
          className="h-12 w-12 md:h-16 md:w-16 absolute top-0 right-0 mt-6 mr-6"
        >
          <img src="/logo.png" alt="logo" />
        </a>
        <div className="px-6 md:px-0 md:w-full md:max-w-2xl md:mx-auto">
          {showBackIcon && (
            <div
              role="button"
              tabIndex={0}
              className="md:hidden pt-6 absolute top-0"
              onClick={() => Router.back()}
              onKeyPress={() => Router.back()}
            >
              <Icon name="arrow-left" />
            </div>
          )}
          {title && <div className="md:text-center">{title}</div>}
        </div>
      </div>
      {children}
    </div>
  )
}

MainLayout.Content = Content

export default MainLayout
