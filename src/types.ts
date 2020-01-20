import { ApolloClient } from 'apollo-client'
import { NormalizedCacheObject, InMemoryCache } from 'apollo-cache-inmemory'

export interface Context {
  client: ApolloClient<NormalizedCacheObject>
  cache: InMemoryCache
  getCacheKey: (obj: { __typename: string; id: string | number }) => string
}

export interface Resolver<R, A = { [key: string]: any }, P = {}> {
  (parent: P, args: A, ctx: Context): R | Promise<R>
}
