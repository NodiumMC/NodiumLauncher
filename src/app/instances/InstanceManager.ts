import { Service } from 'typedi'
import { action, makeObservable, observable } from 'mobx'
import { InstanceType } from './InstanceType'
import { LocalStorage } from '../localstorage/LocalStorage.class'
import { InstancesLSModel } from '../localstorage/models/InstancesLSModel'
import { MinecraftVersionAPI, MinecraftVersion } from 'ndml-core/browser'

@Service()
export class InstanceManager {
  @observable instances: InstanceType[] = []

  @observable selectedId?: string

  constructor(private localStorage: LocalStorage) {
    makeObservable(this)
  }

  @action
  load() {
    this.instances = this.localStorage.getModel<InstancesLSModel>(InstancesLSModel).instances ?? []
  }

  @action
  async create() {
    const mcLastRelease = await MinecraftVersionAPI.fetchBaseVersions().then(
      r => r.filter(v => v.type === 'release')[0]
    )

    console.log(mcLastRelease)

    const id = `instance-${Date.now()}`

    const newInstance: InstanceType = {
      id,
      mcv: new MinecraftVersion(mcLastRelease.id),
      info: {
        name: mcLastRelease.id,
      },
      local: true,
      settings: {
        alloc: 2048,
      },
      favorite: false
    }

    const insmodel =
      this.localStorage.getModel(InstancesLSModel)
    if(!insmodel) return
    insmodel.instances.push(newInstance)
    await this.localStorage.saveModel(InstancesLSModel)

    this.instances.push(newInstance)
    this.selectedId = id
  }

  get selected() {
    return this.instances.find(i => i.id === this.selectedId) ?? this.instances[0]
  }

  async save() {
    await this.localStorage.saveModel(InstancesLSModel)
  }

}
