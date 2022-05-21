import { FC } from 'react'
import s from './Header.module.scss'
import { WindowButton } from '../WindowButton/WindowButton'
import { Signal } from '../../UIs/Signal/Signal'
import { MathUtils } from '../../../../app/utils/MathUtils'
import { useApiStatus } from '../../../hooks/useApi'
import { ObserverComponent } from '../../utils/ObserverComponent'

export const Header: FC = ObserverComponent(() => {
    const status = useApiStatus()

    return <div className={s.header}>
      <div></div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Signal tiles={Math.floor(MathUtils.map(status.lastPing, 500, 0, 1, 3))}/>
        <WindowButton type={'minimize'}/>
        <WindowButton type={'maximize'}/>
        <WindowButton type={'close'}/>
      </div>
    </div>
  }
)
