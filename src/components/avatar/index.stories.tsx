import React from 'react'
import Avatar from './index'

export default { title: 'Avatar' }

export const Default = () => {
  return <Avatar text="Apollo" />
}

export const WithImage = () => {
  return (
    <Avatar
      text="Apollo"
      imageUrl="https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5"
    />
  )
}
