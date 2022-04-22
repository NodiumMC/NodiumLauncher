import { FC, ReactNode } from 'react'
import s from './SingleTag.module.scss'
import cn from 'classnames'
import { ClassNamable } from '../../../types/UtilityProps'

export interface SingleTagProps {
  letter?: string,
  g?: number
}

export const SingleTag: FC<SingleTagProps & ClassNamable> = ({className, letter = '', g = 0}) => {
  return <div className={cn(s.tag, s[`g${g}`], className)}>{letter}</div>
}
