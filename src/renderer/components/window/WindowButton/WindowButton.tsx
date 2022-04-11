import { FC } from 'react'
import s from './WindowButton.module.scss'
import cn from 'classnames'
import { WindowAction } from '../../../../app/ipc'

export interface WindowButtonProps {
  type: WindowAction
}

export const WindowButton: FC<WindowButtonProps> = ({ type }) => {
  return <div className={s.button} onClick={() => window.electron.ipcRenderer.windowAction(type)}>
    {(() => {
      switch (type) {
        case 'maximize':
          return <>
            <div className={cn(s.line, s.box1)} />
            <div className={cn(s.line, s.box2)} />
            <div className={cn(s.line, s.box3)} />
            <div className={cn(s.line, s.box4)} />
          </>
        case 'close':
          return <>
            <div className={cn(s.line, s.close1)} />
            <div className={cn(s.line, s.close2)} />
          </>
        case 'minimize':
          return <div className={cn(s.line, s.box1, s.minimize)} />
        default:
          return <></>
      }
    })()}
  </div>
}
