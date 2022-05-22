import { LocalStorage } from '../../app/localstorage/LocalStorage.class'
import { Preloader } from '../../app/Preloader'
import { APIStatus } from '../../app/API/APIStatus'
import { NavController } from '../../app/NavController'

export type GlobalStoreType = {
  localStorage: LocalStorage
  preloader: Preloader,
  nav: NavController,
  api: {
    status: APIStatus
  }
}
