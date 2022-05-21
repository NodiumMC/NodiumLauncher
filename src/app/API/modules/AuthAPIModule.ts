import { Service } from 'typedi'
import { APIProvider } from '../APIProvider'
import { Preloader } from '../../Preloader'
import { Restponse } from '../apiTypes/response'
import { LoginResponse } from '../apiTypes/auth'
import { rds } from '../utils/rds'
import { LocalStorage } from '../../localstorage/LocalStorage.class'
import { AccessTokenModel } from '../../localstorage/models/AccessToken.model'
import { UserAPIModule } from './UserAPIModule'

@Service()
export class AuthAPIModule {
  constructor(
    private preloader: Preloader,
    private provider: APIProvider,
    private ls: LocalStorage,
    private userApi: UserAPIModule,
  ) {}

  async login(username: string, password: string): Promise<void> {
    await this.preloader.add('Вход', async () => {
      const token = await this.provider.axios
        .post<Restponse<LoginResponse>>('auth/login', {
          username,
          password,
        })
        .then(rds)
        .then(v => v?.data?.accessToken)
      if (token) {
        this.ls.getModel(AccessTokenModel).accessToken = token
      }
    })
    await this.preloader.add('Получение данных пользователя', () => this.userApi.me())
  }
}
