import { LocalStorage } from '../../app/localstorage/LocalStorage.class'
import { Preloader } from '../../app/Preloader'
import { InstanceManager } from '../../app/instances/InstanceManager'

export type GlobalStoreType = {
  localStorage: LocalStorage
  preloader: Preloader,
  instancesManager: InstanceManager
}
