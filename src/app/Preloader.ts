import { Container, Service } from 'typedi'
import { action, makeObservable, observable } from 'mobx'
import { wait } from './wait'
import { LocalStorage } from './localstorage/LocalStorage.class'
import { InstancesLSModel } from './localstorage/models/InstancesLSModel'
import { InstanceManager } from './instances/InstanceManager'

export type PreloaderQueueTask = () => Awaitable
export type PreloaderQueueUnit = [name: string, task: () => Awaitable]

@Service()
export class Preloader {
  @observable private queue: PreloaderQueueUnit[] = []
  @observable private processing: boolean = false
  @observable private current: string = ''

  constructor(private ls: LocalStorage) {
    makeObservable(this)
    this.add('Initializing', async () => {
      await wait(2000)
    })
    this.add('Preparing local storage', async () => {
      await this.ls.registerModel(InstancesLSModel)
      Container.get(InstanceManager).load()
    })
  }

  @action
  add(name: string, task: PreloaderQueueTask) {
    this.queue.push([name, task])
    this.process()
  }

  get currentTaskName() {
    return this.current
  }

  get inProcess(): boolean {
    return this.processing
  }

  private get tasksAvailable(): boolean {
    return this.queue.length > 0
  }

  @action
  private async process() {
    if (this.processing) return
    this.processing = true
    while (this.tasksAvailable) {
      const [name, task] = this.queue.shift() as PreloaderQueueUnit
      this.current = name
      await task()
    }
    this.processing = false
  }
}
