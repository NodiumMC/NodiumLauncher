import { APIProvider } from '../APIProvider'
import { UserService } from '../../user/UserService'
import { MeDocument, MeQuery, User } from '../../graphql/generated/graphql'
import { Service } from 'typedi'

@Service()
export class UserAPIModule {
  constructor(
    private provider: APIProvider,
    private userService: UserService
  ) {}

  async me() {
    this.userService.userData = await this.provider.apollo
      .query<MeQuery>({
        query: MeDocument,
      })
      .then(res => res.data.me as User)
  }
}
