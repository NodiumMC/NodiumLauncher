import { LocalStorage } from '../../app/localstorage/LocalStorage.class'
import { Preloader } from '../../app/Preloader'
import { APIStatus } from '../../app/API/APIStatus'

export type GlobalStoreType = {
  localStorage: LocalStorage
  preloader: Preloader,
  api: {
    status: APIStatus
  }
}
