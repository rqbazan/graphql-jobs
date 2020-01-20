import React from 'react'
import debounce from 'lodash.debounce'

interface Options {
  onSearch(term: string): void
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function useOnChange({
  onSearch,
  onChange: originalOnChange
}: Options) {
  const memoizedOnSearch = React.useCallback(onSearch, [])

  const debouncedOnSearch = React.useCallback<Options['onSearch']>(
    debounce(memoizedOnSearch, 1000),
    [memoizedOnSearch]
  )

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedOnSearch(e.target.value)
    if (originalOnChange) {
      originalOnChange(e)
    }
  }

  return onChange
}
