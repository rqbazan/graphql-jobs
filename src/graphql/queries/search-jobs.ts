import gql from 'graphql-tag'

export default gql`
  query Jobs($input: SearchArgsInput!) {
    jobs: searchJobs(input: $input) @client {
      id
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
        name
        logoUrl
      }
    }
  }
`
