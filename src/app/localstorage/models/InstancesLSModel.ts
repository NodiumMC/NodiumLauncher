import { LocalStorageModel } from '../LocalStorageModel'
import { LSModel } from '../LocalStorage.decorator'
import { InstanceType } from '../../instances/InstanceType'

@LSModel('instances')
export class InstancesLSModel extends LocalStorageModel {
  instances: InstanceType[] = []
}
