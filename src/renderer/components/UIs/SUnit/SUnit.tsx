import { FC } from 'react'
import s from './SUnit.module.scss'

export type SUnitProps = {
  title?: string
}

export const SUnit: FC<SUnitProps> = ({title, children}) => {
  return <div className={s.unit}>
    {title && <div className={s.title}>{title}</div>}
    {children}
  </div>
}
