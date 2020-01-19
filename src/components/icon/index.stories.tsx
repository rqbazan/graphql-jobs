import React from 'react'
import Icon, { iconNames } from './index'

export default { title: 'Icon' }

export const Iconography = () => {
  return (
    <div className="flex flex-wrap">
      {iconNames.map(iconName => (
        <Icon key={iconName} name={iconName} className="h-8 w-8 mr-3" />
      ))}
    </div>
  )
}
