import { LocalStorage } from '../../app/localstorage/LocalStorage.class'
import { Preloader } from '../../app/Preloader'

export type GlobalStoreType = {
  localStorage: LocalStorage
  preloader: Preloader
}
