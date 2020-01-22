import gql from 'graphql-tag'
import jobPreviewFragment from '../fragments/job-preview'

export default gql`
  query RemoteJobs($where: JobWhereInput!, $orderBy: JobOrderByInput) {
    remotes {
      id
      jobs(where: $where, orderBy: $orderBy) {
        ...jobPreview
      }
    }
  }
  ${jobPreviewFragment}
`
