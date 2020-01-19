import React from 'react'
import Switch from './index'

export default { title: 'Switch' }

export const Default = () => {
  return <Switch name="default" />
}

export const On = () => {
  return <Switch name="on" checked />
}

export const Off = () => {
  return <Switch name="off" checked={false} />
}
