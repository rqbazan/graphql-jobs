import React from 'react'
import cs from 'classnames'

export interface AvatarProps {
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <div
      className={cs(
        'flex-shrink-0 mr-2 rounded-1/2 bg-red-400 h-12 w-12',
        className
      )}
    />
  )
}

export default Avatar
