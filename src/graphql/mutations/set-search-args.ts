import gql from 'graphql-tag'

export default gql`
  mutation SetSearchArgs($input: SearchArgsInput!) {
    setSearchArgs(input: $input) @client
  }
`
