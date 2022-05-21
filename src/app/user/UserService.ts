import { Service } from 'typedi'
import { User as UserType } from '../graphql/generated/graphql'

@Service()
export class User {
  // User related
  userData?: UserType
  // Advanced
  isAuth: boolean = false
}
