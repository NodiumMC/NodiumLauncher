import { Service } from 'typedi'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import axios, { AxiosInstance } from 'axios'

@Service()
export class APIProvider {
  static BASE_URL: string = 'http://localhost:4044/'
  readonly apollo: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: APIProvider.BASE_URL + 'graphql',
    cache: new InMemoryCache()
  });
  readonly axios: AxiosInstance = axios.create({
    baseURL: APIProvider.BASE_URL,
    timeout: 10000,
    withCredentials: true,
  })
}
