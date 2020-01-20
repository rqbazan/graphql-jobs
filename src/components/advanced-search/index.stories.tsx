import React from 'react'
import AdvancedSearch from './index'

// FIXME: defaultViewport not working

export default {
  title: 'AdvancedSearch',
  parameters: {
    viewport: { defaultViewport: 'iphone6' }
  }
}

export const Default = () => {
  return <AdvancedSearch onClose={() => null} companies={[]} countries={[]} />
}
