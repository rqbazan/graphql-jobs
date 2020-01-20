import { ApolloClient } from 'apollo-client'
import { NormalizedCacheObject, InMemoryCache } from 'apollo-cache-inmemory'

export interface Context {
  client: ApolloClient<NormalizedCacheObject>
  cache: InMemoryCache
}

export interface Resolver<R, A = { [key: string]: any }, P = {}> {
  (parent: P, args: A, ctx: Context): R | Promise<R>
}
