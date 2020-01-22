import { Resolver } from '~/types'
import { SetSearchArgsMutationVariables } from '~/generated/codegen'
import getSearchArgsQuery from '~/graphql/queries/get-search-args'

const setSearchArgs: Resolver<boolean, SetSearchArgsMutationVariables> = (
  _,
  { input },
  { cache }
) => {
  try {
    const { searchArgs } = cache.readQuery({ query: getSearchArgsQuery })

    cache.writeData({
      data: {
        getSearchArgs: {
          __typename: 'SearchArgs',
          ...searchArgs,
          ...input
        }
      }
    })

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export default setSearchArgs
