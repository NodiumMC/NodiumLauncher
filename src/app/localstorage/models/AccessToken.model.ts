import { LSModel } from '../LocalStorage.decorator'
import { LocalStorageModel } from '../LocalStorageModel'

@LSModel('token')
export class AccessTokenModel extends LocalStorageModel {
  accessToken?: string
}
