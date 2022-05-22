import { FC, ReactNode } from 'react'
import s from './NavItem.module.scss'
import cn from 'classnames'

interface NavItemProps {
  icon: ReactNode
  onSelect?: (rid: number) => void
  rid: number
  current: number
}

export const NavItem: FC<NavItemProps> = ({icon, rid, onSelect, current}) => {
  return <div className={cn(s.item, rid === current && s.active)} onClick={() => onSelect?.(rid)}>
    <div className={s.icon}>
      {icon}
    </div>
  </div>
}
