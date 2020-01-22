import gql from 'graphql-tag'
import jobFragment from '../fragments/job'

export default gql`
  query Job($companySlug: String!, $jobSlug: String!) {
    job(input: { companySlug: $companySlug, jobSlug: $jobSlug }) {
      ...job
    }
  }
  ${jobFragment}
`
