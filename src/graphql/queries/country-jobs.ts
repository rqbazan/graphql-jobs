import gql from 'graphql-tag'

export default gql`
  query CountryJobs(
    $where: JobWhereInput!
    $orderBy: JobOrderByInput
    $countrySlug: String!
  ) {
    country(input: { slug: $countrySlug }) {
      id
      name
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
