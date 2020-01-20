import gql from 'graphql-tag'

export default gql`
  query SearchArgs {
    searchArgs: getSearchArgs @client {
      term
      countrySlug
      companySlug
      orderByCreatedAt
    }
  }
`
