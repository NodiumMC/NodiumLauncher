import { Service } from 'typedi'
import { makeObservable, observable } from 'mobx'

export enum Page {
  Home = 0
}

@Service()
export class NavController {
  @observable page = Page.Home
  constructor() {
    makeObservable(this)
  }
}
