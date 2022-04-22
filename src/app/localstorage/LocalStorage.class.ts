
import { getLSModelName } from './LocalStorage.util'
import 'reflect-metadata'
import { InvalidLSModelNameException } from '../exceptions/InvalidLSModelName.exception'
import { LocalStorageException } from '../exceptions/LocalStorage.exception'
import { ModelExistsException } from '../exceptions/ModelExists.exception'
import { action, makeObservable, observable } from 'mobx'
import { Service } from 'typedi'
import { LocalStorageModel, ConstructableLSModel } from './LocalStorageModel'

@Service()
export class LocalStorage {
  @observable private models: LocalStorageModel[] = []

  constructor() {
    makeObservable(this)
  }

  @action
  async registerModel<T extends LocalStorageModel>(Model: ConstructableLSModel<T>, load = true) {
    if (!(await this.modelExists(Model))) await this.saveModel(new Model())
    load && (await this.loadModel(Model))
  }

  @action
  async loadModel<T extends LocalStorageModel>(Model: ConstructableLSModel<T>) {
    try {
      if (!(await this.getModel(Model))) {
        const deserialized = new Model().deserialize<typeof Model>(
          await window.electron.ipcRenderer.dataStorageRead(getLSModelName(Model))
        )
        const casted = new Model()
        for (const key of Object.keys(casted)) {
          casted[key] = deserialized[key] || casted[key]
        }
        this.models.push(casted)
      }
    } catch (e) {
      console.error(e)
      throw new LocalStorageException('Failed to load model')
    }
  }

  @action
  async saveModel<T extends LocalStorageModel>(Model: ConstructableLSModel<T> | LocalStorageModel) {
    try {
      const modelName = this.formatName(getLSModelName(Model))
      const candidate = this.models.find(v => getLSModelName(v) === modelName)
      if (candidate)
        await window.electron.ipcRenderer.dataStorageWrite(modelName, candidate.serialize())
      else if (Model instanceof LocalStorageModel)
        await window.electron.ipcRenderer.dataStorageWrite(modelName, Model.serialize())
      else throw new LocalStorageException('Failed to save unloaded model')
    } catch (e) {
      console.error(e)
      throw new LocalStorageException('Failed to save model')
    }
  }

  @action
  async unloadModel<T extends LocalStorageModel>(Model: ConstructableLSModel<T>, save = true) {
    if (save) await this.saveModel(Model)
    this.models = this.models.filter(
      v => getLSModelName(v) !== getLSModelName(Model)
    )
  }

  getModel<T extends LocalStorageModel>(
    Model: ConstructableLSModel<T>
  ): T {
    return this.models.find(v => {
      return getLSModelName(v) === getLSModelName(Model)
    }) as T
  }

  async modelExists<T extends LocalStorageModel>(Model: ConstructableLSModel<T>) {
    try {
      return (
        (await window.electron.ipcRenderer.dataStorageRead(getLSModelName(Model))) !== null
      )
    } catch (e) {
      throw new ModelExistsException()
    }
  }

  private formatName(name: string): string {
    let isIncorrectName = false
    const formatted =
      name
        .trim()
        .replace(/ +(?= )/g, '')
        .replaceAll(' ', '_')
        .toLowerCase()
        .match(/\w+/g)?.[0] || ''
    if (!formatted || formatted?.length === 0) isIncorrectName = true
    if (isIncorrectName) throw new InvalidLSModelNameException()
    return formatted
  }
}
