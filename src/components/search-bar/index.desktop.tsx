import React from 'react'
import cs from 'classnames'
import {
  Country,
  Company,
  SearchArgs,
  useSetSearchArgsMutation
} from '@codegen'
import SortCheck from '../sort-check'
import Select from '../select'
import Input from '../input'
import Icon from '../icon'
import useOnChange from './use-on-change'

export interface SearchBarMobileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  defaultValues?: SearchArgs
  countries: Partial<Country>[]
  companies: Partial<Company>[]
}

const SearchBarDesktopProps: React.FC<SearchBarMobileProps> = ({
  className,
  countries,
  companies,
  defaultValues,
  ...props
}) => {
  const [setSearchArgs] = useSetSearchArgsMutation()

  const onChange = useOnChange({
    onChange: props.onChange,
    onSearch: term => {
      setSearchArgs({ variables: { input: { term } } })
    }
  })

  function onControlChange({ target }) {
    const { type, value, checked, name } = target

    const input = {
      [name]: type === 'checkbox' ? checked : value
    }

    setSearchArgs({ variables: { input } })
  }

  return (
    <div className={cs('flex', className)}>
      <div className="flex-1 flex">
        <Input
          {...props}
          name="term"
          defaultValue={defaultValues?.term}
          className="w-1/2 rounded-r-none z-10"
          icon={<Icon name="search" />}
          onChange={onChange}
        />
        <Select
          name="countrySlug"
          defaultValue={defaultValues?.countrySlug}
          prompt="Country"
          className="w-1/4 rounded-t-none rounded-b-none border-r border-l border-gray-300"
          onChange={onControlChange}
        >
          {countries.map(({ id, slug, name }) => (
            <option key={id} value={slug}>
              {name}
            </option>
          ))}
        </Select>
        <Select
          name="companySlug"
          defaultValue={defaultValues?.companySlug}
          prompt="Company"
          className="w-1/4 rounded-l-none z-10"
          onChange={onControlChange}
        >
          {companies.map(({ id, slug, name }) => (
            <option key={id} value={slug}>
              {name}
            </option>
          ))}
        </Select>
      </div>
      <SortCheck
        name="orderByCreatedAt"
        className="ml-4"
        defaultChecked={defaultValues?.orderByCreatedAt}
        onChange={onControlChange}
      />
    </div>
  )
}

export default SearchBarDesktopProps
