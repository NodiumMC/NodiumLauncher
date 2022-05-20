import { Container, Service } from 'typedi'
import { action, makeObservable, observable } from 'mobx'
import { wait } from './wait'
import { LocalStorage } from './localstorage/LocalStorage.class'
import { AccessTokenModel } from './localstorage/models/AccessToken.model'

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
      await ls.registerModel(AccessTokenModel)
    })
  }

  @action
  add(name: string, task: PreloaderQueueTask): Promise<void> {
    return new Promise<void>((resolve) => {
      this.queue.push([name, async ()  => await task().then(() => resolve()).catch(e => {
        throw e
      })])
      this.process()
    })
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
