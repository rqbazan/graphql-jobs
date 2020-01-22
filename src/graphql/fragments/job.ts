import gql from 'graphql-tag'

export default gql`
  fragment job on Job {
    id
    title
    description
    applyUrl
    company {
      id
      slug
      name
      logoUrl
    }
    tags {
      id
      name
    }
  }
`
