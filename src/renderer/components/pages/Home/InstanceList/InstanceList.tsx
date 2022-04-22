import { FC, useMemo } from 'react'
import s from './InstanceList.module.scss'
import { Item } from './Item/Item'
import { ClassNamable } from '../../../../types/UtilityProps'
import cn from 'classnames'
import { ObserverComponent } from '../../../utils/ObserverComponent'
import { useStore } from '../../../../hooks/useStore'
import { InstancesLSModel } from '../../../../../app/localstorage/models/InstancesLSModel'

export const InstanceList: FC<ClassNamable> = ObserverComponent(
  ({ className }) => {
    const instances = useStore(s => s.instancesManager)

    // const sortedInstances = useMemo(() => {
    //   return instances?.instances?.slice().sort((a, b) => {
    //     return a.favorite ? 1 : b.favorite ? -1 : 0
    //   })
    // }, [instances])

    return (
      <div className={cn(s.list, className)}>
        {instances &&
          instances.instances.map((v, i) => <Item key={i} instance={v} />)}
      </div>
    )
  }
)
