import gql from 'graphql-tag'
import jobPreviewFragment from '../fragments/job-preview'

export default gql`
  query Jobs($input: SearchArgsInput!) {
    jobs: searchJobs(input: $input) @client {
      ...jobPreview
    }
  }
  ${jobPreviewFragment}
`
