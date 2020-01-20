/* eslint no-bitwise: 0 */
import React from 'react'
import cs from 'classnames'

export interface AvatarProps {
  className?: string
  text?: string
  imageUrl?: string
}

// reference: https://stackoverflow.com/q/3426404
function getHashCode(string) {
  let hash = 0

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 2) - hash)
    hash &= hash
  }

  return hash
}

const Avatar: React.FC<AvatarProps> = ({ className, text = '' }) => {
  const shortened = getHashCode(text) % 360

  const bgColor = `hsl(${shortened},50%,90%)`
  const textColor = `hsl(${shortened},100%,20%)`

  return (
    <div
      className={cs(
        'flex items-center justify-center flex-shrink-0 mr-2 rounded-1/2 bg-red-400 h-12 w-12 uppercase',
        className
      )}
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      {text?.slice(0, 2)}
    </div>
  )
}

export default Avatar
