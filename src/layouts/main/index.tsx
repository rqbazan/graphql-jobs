import React from 'react'
import Router from 'next/router'
import Icon from '~/components/icon'

export interface MainLayoutProps {
  title?: React.ReactNode
  showBackIcon?: boolean
  offset: number
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  offset,
  showBackIcon = false
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-end h-32 md:h-48 bg-primary">
        <div
          className="px-6 md:px-0 md:w-full md:max-w-2xl md:mx-auto"
          style={{ marginBottom: offset + 16 }}
        >
          {showBackIcon && (
            <div
              role="button"
              tabIndex={0}
              className="pt-6 absolute top-0"
              onClick={() => Router.back()}
              onKeyPress={() => Router.back()}
            >
              <Icon name="arrow-left" />
            </div>
          )}
          {title && <div className="md:text-center">{title}</div>}
        </div>
      </div>
      <div
        style={{ marginTop: -offset }}
        className="px-6 md:px-0 md:w-full md:max-w-2xl md:mx-auto"
      >
        {children}
      </div>
    </div>
  )
}

export default MainLayout
