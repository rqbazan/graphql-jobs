import React from 'react'
import cs from 'classnames'
import { useSetSearchArgsMutation } from '@codegen'
import Input from '../input'
import Icon from '../icon'
import useOnChange from './use-on-change'

export interface SearchBarMobileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onTuneClick(): void
}

const SearchBarMobile: React.FC<SearchBarMobileProps> = ({
  className,
  onTuneClick,
  ...props
}) => {
  const [setSearchArgs] = useSetSearchArgsMutation()

  const onChange = useOnChange({
    onChange: props.onChange,
    onSearch: term => {
      setSearchArgs({ variables: { input: { term } } })
    }
  })

  return (
    <div className={cs('flex', className)}>
      <Input
        {...props}
        className="flex-1"
        icon={<Icon name="search" />}
        onChange={onChange}
      />
      <div
        role="button"
        tabIndex={0}
        onKeyPress={onTuneClick}
        onClick={onTuneClick}
        className="flex items-center justify-center bg-white rounded-1/2 h-10 w-10 ml-4 shadow"
      >
        <Icon name="tune" />
      </div>
    </div>
  )
}

export default SearchBarMobile
