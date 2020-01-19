import React from 'react'
import cs from 'classnames'

export type ContentType = React.FC<{ className?: string }>

const Content: ContentType = ({ className, children }) => {
  return (
    <div
      className={cs(
        'px-6 md:px-0 md:w-full md:max-w-2xl md:mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Content
