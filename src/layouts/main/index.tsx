import React from 'react'
import Header, { HeaderType } from './header'
import Content, { ContentType } from './content'
import './styles.css'

export interface MainLayoutProps {
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> & {
  Content: ContentType
  Header: HeaderType
} = ({ children }) => {
  return <div className="flex flex-col">{children}</div>
}

MainLayout.Content = Content
MainLayout.Header = Header

export default MainLayout
