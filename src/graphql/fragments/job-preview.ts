import gql from 'graphql-tag'

export default gql`
  fragment jobPreview on Job {
    id
    slug
    title
    commitment {
      id
      title
    }
    cities {
      id
      name
    }
    company {
      id
      slug
      name
      logoUrl
    }
  }
`
