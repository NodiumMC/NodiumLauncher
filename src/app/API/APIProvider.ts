import { Service } from 'typedi'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { LocalStorage } from '../localstorage/LocalStorage.class'
import { AccessTokenModel } from '../localstorage/models/AccessToken.model'
import lf from 'lowfun'

@Service()
export class APIProvider {
  static BASE_URL: string = 'http://localhost:4044/'
  readonly apollo: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: APIProvider.BASE_URL + 'graphql',
    cache: new InMemoryCache(),
  })
  readonly axios: AxiosInstance = axios.create({
    baseURL: APIProvider.BASE_URL,
    timeout: 10000,
    withCredentials: true,
  })

  constructor(private ls: LocalStorage) {
    this.axios.interceptors.request.use(this.requestInterceptor)
    this.axios.interceptors.response.use(lf, this.responseInterceptor)
  }

  private requestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
    const accessToken = this.ls.getModel(AccessTokenModel).accessToken
    if (!config.headers) config.headers = {}
    if (accessToken && config.headers)
      config.headers.Authorization = `Bearer ${accessToken}`
    return config
  }

  private async responseInterceptor(error: AxiosError) {
    const originalRequest = error.config
    let isRetry = false
    if (error.config && error.response?.status === 401 && !isRetry)
      if(await this.refresh()) await axios.request(originalRequest)
    else throw error
  }

  async refresh(): Promise<boolean> {
    try {
      this.ls.getModel(AccessTokenModel).accessToken = await axios
        .get(`${APIProvider.BASE_URL}api/refresh`, {
          withCredentials: true,
          timeout: 5000,
        })
        .then(res => {
          const token = res.data?.data?.accessToken
          if(!token) throw new Error('Missing token')
          return token
        })
      await this.ls.saveModel(AccessTokenModel)
      return true
    } catch (e) { return false }
  }
}
