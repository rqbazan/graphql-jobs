import React from 'react'
import Field from './index'
import Input from '../input'
import Select from '../select'
import Switch from '../switch'

export default { title: 'Field' }

export const WithSelect = () => {
  return (
    <Field
      label="Country"
      component={
        <Select>
          <option>USA</option>
          <option>Germany</option>
          <option>Japan</option>
        </Select>
      }
    />
  )
}

export const WithInput = () => {
  return <Field label="Name" component={<Input />} />
}

export const Inline = () => {
  return <Field inline label="Touch me" component={<Switch name="inline" />} />
}
