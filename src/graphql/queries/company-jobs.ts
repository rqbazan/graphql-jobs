import gql from 'graphql-tag'

export default gql`
  query CompanyJobs($where: JobWhereInput!, $orderBy: JobOrderByInput) {
    companies {
      id
      slug
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
