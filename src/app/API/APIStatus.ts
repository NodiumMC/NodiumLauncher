import { Service } from 'typedi'
import { makeObservable, observable } from 'mobx'
import { APIProvider } from './APIProvider'
import lf from 'lowfun'
import axios, { AxiosError } from 'axios'

@Service()
export class APIStatus {
  @observable lastPing = 0
  @observable refreshProblem: boolean = false
  @observable online: boolean = false

  constructor(
    private provider: APIProvider
  ) {
    makeObservable(this)
    this.provider.axios.interceptors.request.use(config => config['metadata']['time'] = Date.now())
    this.provider.axios.interceptors.response.use(response => this.lastPing = Date.now() - response.config['metadata'['time']])
    this.provider.axios.interceptors.response.use(lf, (error: AxiosError) => error.config['isRetry'] && (this.refreshProblem = true))
    this.provider.axios.interceptors.response.use(lf, async (error: AxiosError) => {
      if (!error.status) {
        const original = error.config
        if(original['tries'] < 6) {
          original['tries'] = original['tries'] ?? 0
          original['tries']++
          return axios.request(original)
        } else {
          this.online = false
          throw error
        }
      }
    })
  }
}
