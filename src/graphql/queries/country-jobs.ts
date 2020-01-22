import gql from 'graphql-tag'
import jobPreviewFragment from '../fragments/job-preview'

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
        ...jobPreview
      }
    }
  }
  ${jobPreviewFragment}
`
