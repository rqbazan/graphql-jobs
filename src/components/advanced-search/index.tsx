import React from 'react'
import Field from '../field'
import Select from '../select'
import Switch from '../switch'
import Icon from '../icon'

const AdvancedSearch = () => {
  return (
    <div className="bg-gray-200 fixed w-full top-0 bottom-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-2xl">Advanced Search</h2>
        <div role="button" tabIndex={0} className="focus:outline-none">
          <Icon name="close" />
        </div>
      </div>
      <div className="mt-4">
        <Field label="Country" component={<Select />} className="mb-4" />
        <Field label="Company" component={<Select />} className="mb-4" />
        <Field
          inline
          label="Order by published"
          component={<Switch name="sorted" />}
          className="mb-4"
        />
      </div>
    </div>
  )
}

export default AdvancedSearch
