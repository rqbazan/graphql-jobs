import React from 'react'

const Tag: React.FC = ({ children }) => {
  return (
    <span className="inline-flex bg-black text-white px-2 py-1 rounded-full text-xs">
      {children}
    </span>
  )
}

export default Tag
