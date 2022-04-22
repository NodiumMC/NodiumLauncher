import { FC, useMemo } from 'react'
import { Version } from '../../../../app/Version'
import s from './VersionState.module.scss'
import { ClassNamable } from '../../../types/UtilityProps'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleArrowDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export interface VersionStateProps {
  current: Version | string
  latest: Version | string
}

export const VersionState: FC<VersionStateProps & ClassNamable> = ({ current, latest, className }) => {

  const level = useMemo(() => {
    const c = new Version(current)
    const l = new Version(latest)
    const diff = c.diff(l)
    const impact = c.impact(l)
    const level: 'red' | 'yellow' | 'green' = diff !== 0 ? diff > 5 && (impact === 'major' || impact === 'minor') ? 'red' : 'yellow' : 'green'
    return level
  }, [current, latest])

  return <div className={cn(s.vs, s[level], className)}>{(() => {
    switch (level){
      case 'green': return <FontAwesomeIcon icon={faCircleCheck}/>
      case 'yellow': return <FontAwesomeIcon icon={faCircleArrowDown}/>
      case 'red': return <FontAwesomeIcon icon={faCircleXmark}/>
    }
  })()}</div>
}
