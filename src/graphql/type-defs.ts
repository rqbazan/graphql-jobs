import gql from 'graphql-tag'

export default gql`
  input SearchArgsInput {
    term: String
    countrySlug: String
    companySlug: String
    orderByCreatedAt: Boolean
  }

  type SearchArgs {
    term: String!
    countrySlug: String!
    companySlug: String!
    orderByCreatedAt: Boolean!
  }

  extend type Mutation {
    setSearchArgs(input: SearchArgsInput!): Boolean!
  }

  extend type Query {
    getSearchArgs: SearchArgs!
    searchJobs(input: SearchArgsInput!): [Job]
  }
`
