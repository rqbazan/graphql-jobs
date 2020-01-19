import React from 'react'

const FAB: React.FC = ({ children }) => {
  return (
    <button
      type="button"
      className="bg-secondary text-white font-semibold px-6 h-10 rounded-full shadow-md focus:outline-none"
    >
      {children}
    </button>
  )
}

export default FAB
