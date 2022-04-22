import { FC, useState } from 'react'
import s from './StarSwitch.module.scss'
import { ClassNamable, DataEntriable, OnClickable } from '../../../types/UtilityProps'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as hollowStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

export const StarSwitch: FC<ClassNamable & OnClickable & DataEntriable<boolean>> = ({
                                                                                      className,
                                                                                      onClick,
                                                                                      onChange,
                                                                                      value
                                                                                    }) => {

  const [state, setState] = useState(!!value)

  return <div className={cn(s.switch, className)} onClick={() => {
    onClick?.()
    setState(s => !s)
    onChange?.(state)
  }}>
    <FontAwesomeIcon icon={hollowStar} className={cn(s.star)} />
    <FontAwesomeIcon icon={solidStar} className={cn(s.star, s.solid, state && s.active)} />
  </div>
}
