import { FC } from 'react'
import s from './Item.module.scss'
import { SingleTag } from '../../../../UIs/SingleTag/SingleTag'
import { VersionState } from '../../../../UIs/VersionState/VersionState'
import { StarSwitch } from '../../../../UIs/StarSwitch/StarSwitch'
import { InstanceType } from '../../../../../../app/instances/InstanceType'
import { ObserverComponent } from '../../../../utils/ObserverComponent'
import { useStore } from '../../../../../hooks/useStore'
import { InstancesLSModel } from '../../../../../../app/localstorage/models/InstancesLSModel'

const Icon: FC = () => {
  return <div className={s.icon}></div>
}

export interface ItemProps {
  instance: InstanceType
}

export const Item: FC<ItemProps> = ObserverComponent(({ instance }) => {

  const ls = useStore(s => s.localStorage)

  return <div className={s.item}>
    <div className={s.visualData}>
      <div className={s.iconWrapper}>
        <Icon />
      </div>
      <div className={s.info}>
        <div className={s.iname}>{instance.info.name}</div>
        <div className={s.idata}>
          {instance.mcv.version} {instance.mcv.provider}
        </div>
      </div>
    </div>
    <div className={s.tags} />
    <div className={s.updateCheck}>
      {instance.version && (
        <VersionState
          current={instance.version.current}
          latest={instance.version.latest}
        />
      )}
    </div>
    <div className={s.favorite}>
      <StarSwitch onChange={v => {
        instance.favorite = v
        ls.saveModel(InstancesLSModel)
      }} />
    </div>
  </div>
  })
