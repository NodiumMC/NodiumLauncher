import { Service } from 'typedi'
import { User } from '../graphql/generated/graphql'
import { makeObservable, observable } from 'mobx'

@Service()
export class UserService {
  // User related
  @observable userData?: User
  // Advanced
  @observable isAuth: boolean = false

  constructor() {
    makeObservable(this)
  }
}
