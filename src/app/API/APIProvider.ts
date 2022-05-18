import { Service } from 'typedi'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

@Service()
export class APIProvider {
  private BASE_URL: string = 'http://localhost:4044/'
  readonly apollo: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: this.BASE_URL + 'graphql',
    cache: new InMemoryCache()
  });
}
