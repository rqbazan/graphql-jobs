import React from 'react'
import SearchBar from './index'

export default { title: 'SearchBar' }

export const Mobile = () => {
  return <SearchBar.Mobile onTuneClick={() => null} />
}

export const Desktop = () => {
  return <SearchBar.Desktop countries={[]} companies={[]} />
}
