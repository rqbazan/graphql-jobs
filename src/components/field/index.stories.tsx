import React from 'react'
import Field from './index'
import Input from '../input'
import Select from '../select'

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
