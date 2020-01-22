import gql from 'graphql-tag'
import jobPreviewFragment from '../fragments/job-preview'

export default gql`
  query CompanyJobs($where: JobWhereInput!, $orderBy: JobOrderByInput) {
    companies {
      id
      slug
      jobs(where: $where, orderBy: $orderBy) {
        ...jobPreview
      }
    }
  }
  ${jobPreviewFragment}
`
