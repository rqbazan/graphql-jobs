import { SearchArgs } from '@codegen'

const searchArgs: SearchArgs = {
  __typename: 'SearchArgs',
  term: '',
  countrySlug: null,
  companySlug: null,
  orderByCreatedAt: false
}

export default {
  getSearchArgs: searchArgs
}
