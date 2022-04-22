import React from 'react'
import cn from 'classnames'
import s from './appPreloader.module.scss'
// import {app} from "../../index";
import preloader_img from '../../../assets/img/animated/small_preloader.gif'
import { ObserverComponent } from '../../utils/ObserverComponent'
import { SuperGap } from '../../utils/SuperGap'
import { useStore } from '../../../hooks/useStore'

export const AppPreloader = ObserverComponent(() => {
  const preloader = useStore(s => s.preloader)

  if (!preloader.inProcess) return <></>

  return (
    <>
      <div className={cn(s.preloader)}>
        <div className={s.center}>
          <div className={cn(s.title, s.smallTitle)}>Nodium Projects</div>
          <div className={s.primaryTitle}>Minecraft</div>
          <div className={s.title}>Nodium Launcher</div>
          <SuperGap count={2} />
          <div className={s.loadingStage}>
            <img className={s.preloaderImg} src={preloader_img} alt="" />
            <div className={cn(s.title, s.smallTitle, s.stage)}>
              {preloader.currentTaskName}
            </div>
          </div>
          <div className={s.funText}>Иногда нужно просто подождать</div>
        </div>
      </div>
    </>
  )
})
