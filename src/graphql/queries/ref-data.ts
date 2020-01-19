import gql from 'graphql-tag'

export default gql`
  query RefData {
    countries {
      id
      name
      slug
    }
    companies {
      id
      name
      slug
    }
  }
`
