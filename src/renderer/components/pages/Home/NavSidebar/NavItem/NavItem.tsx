import { FC, ReactNode } from 'react'
import s from './NavItem.module.scss'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

interface NavItemProps {
  icon: ReactNode
  path?: string
  onSelect?: (rid: number) => void
  rid: number
}

export const NavItem: FC<NavItemProps> = ({icon, path, rid, onSelect}) => {
  return <NavLink to={path ?? '/'} className={({ isActive }) => isActive ? cn(s.item, s.active) : s.item} onClick={() => onSelect?.(rid)}>
    <div className={s.icon}>
      {icon}
    </div>
  </NavLink>
}
