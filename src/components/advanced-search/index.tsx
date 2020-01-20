import React from 'react'
import {
  Country,
  Company,
  SearchArgs,
  useSetSearchArgsMutation
} from '@codegen'
import Field from '../field'
import Select from '../select'
import Switch from '../switch'
import Icon from '../icon'

export interface AdvancedSearchProps {
  onClose(): void
  defaultValues?: SearchArgs
  countries: Partial<Country>[]
  companies: Partial<Company>[]
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  onClose,
  countries,
  companies,
  defaultValues
}) => {
  const [setSearchArgs] = useSetSearchArgsMutation()

  function onControlChange({ target }) {
    const { type, value, checked, name } = target

    const input = {
      [name]: type === 'checkbox' ? checked : value
    }

    setSearchArgs({ variables: { input } })
  }

  return (
    <div className="bg-gray-200 fixed w-full top-0 bottom-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-2xl">Advanced Search</h2>
        <div
          role="button"
          tabIndex={0}
          className="focus:outline-none"
          onClick={onClose}
          onKeyPress={onClose}
        >
          <Icon name="close" />
        </div>
      </div>
      <div className="mt-4">
        <Field
          label="Country"
          className="mb-4"
          component={
            <Select
              name="countrySlug"
              defaultValue={defaultValues?.countrySlug}
              onChange={onControlChange}
            >
              {countries.map(({ id, slug, name }) => (
                <option key={id} value={slug}>
                  {name}
                </option>
              ))}
            </Select>
          }
        />
        <Field
          label="Company"
          className="mb-4"
          component={
            <Select
              name="companySlug"
              defaultValue={defaultValues?.companySlug}
              onChange={onControlChange}
            >
              {companies.map(({ id, slug, name }) => (
                <option key={id} value={slug}>
                  {name}
                </option>
              ))}
            </Select>
          }
        />
        <Field
          inline
          label="Order by published"
          component={
            <Switch
              name="orderByCreatedAt"
              defaultChecked={defaultValues?.orderByCreatedAt}
              onChange={onControlChange}
            />
          }
          className="mb-4"
        />
      </div>
    </div>
  )
}

export default AdvancedSearch
