import gql from 'graphql-tag'

export default gql`
  query RemoteJobs($where: JobWhereInput!, $orderBy: JobOrderByInput) {
    remotes {
      id
      jobs(where: $where, orderBy: $orderBy) {
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
  }
`
