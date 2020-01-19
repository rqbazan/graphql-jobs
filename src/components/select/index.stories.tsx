import React from 'react'
import Select from './index'

export default { title: 'Select' }

export const Default = () => {
  return (
    <Select prompt="Country">
      <option>Peru</option>
      <option>Argentina</option>
      <option>USA</option>
    </Select>
  )
}
