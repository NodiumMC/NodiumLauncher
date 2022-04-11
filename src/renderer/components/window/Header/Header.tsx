import { FC } from 'react'
import s from './Header.module.scss'
import { WindowButton } from '../WindowButton/WindowButton'

export const Header: FC = () => {
  return <div className={s.header}>
    <div></div>
    <div style={{display: 'flex'}}>
      <WindowButton type={'minimize'}/>
      <WindowButton type={'maximize'}/>
      <WindowButton type={'close'}/>
    </div>
  </div>
}
