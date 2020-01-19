import React from 'react'
import Icon from '../icon'
import Input from './index'

export default { title: 'Input' }

export const Default = () => {
  return <Input />
}

export const WithIcon = () => {
  return <Input icon={<Icon name="search" />} />
}
