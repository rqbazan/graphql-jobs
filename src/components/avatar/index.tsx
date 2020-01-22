/* eslint no-bitwise: 0 */
import React from 'react'
import cs from 'classnames'

export interface AvatarProps {
  text?: string
  className?: string
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

function getStyle({ text, imageUrl }: AvatarProps) {
  if (imageUrl) {
    return null
  }

  const shortened = getHashCode(text) % 360

  const bgColor = `hsl(${shortened},50%,90%)`
  const textColor = `hsl(${shortened},100%,20%)`

  return {
    backgroundColor: bgColor,
    color: textColor
  }
}

const Avatar: React.FC<AvatarProps> = props => {
  const { text, imageUrl, className } = props

  return (
    <div
      className={cs(
        'flex items-center justify-center flex-shrink-0 mr-2 rounded-1/2 h-12 w-12 uppercase overflow-hidden',
        className
      )}
      style={getStyle(props)}
    >
      {!imageUrl ? text?.slice(0, 2) : <img src={imageUrl} alt="avatar" />}
    </div>
  )
}

export default React.memo(Avatar)
