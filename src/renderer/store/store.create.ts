import { GlobalStoreType } from './store.type'
import { Container } from 'typedi'
import { LocalStorage } from '../../app/localstorage/LocalStorage.class'
import { Preloader } from '../../app/Preloader'

export const createStore = (): GlobalStoreType => ({
  localStorage: Container.get(LocalStorage),
  preloader: Container.get(Preloader),
})
