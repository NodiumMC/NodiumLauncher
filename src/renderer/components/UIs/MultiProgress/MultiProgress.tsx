import s from './MultiProgress.module.scss'
import React from "react";
import cn from "classnames";

export type MultiProgressProps = {
  progress0?: number
  progress1?: number
  progress2?: number
}

export const MultiProgress: React.FC<MultiProgressProps> = ({progress0}) => {
  return <>
    <div className={s.wrapper}>
      <div className={s.progresss}>
        <div className={cn(s.progress, s.progress0)}/>
        <div className={cn(s.progress, s.progress1)}/>
        <div className={cn(s.progress, s.progress2)}/>
        <div className={cn(s.progress, s.progress3)}/>
      </div>
    </div>
    <svg style={{display: 'none'}}>
      <filter id="multiprogressfilter">
        <feGaussianBlur id="SourceGraphic" stdDeviation=".7"/>
        <feColorMatrix values="
       1 0 0 0 0
       0 1 0 0 0
       0 0 1 0 0
       0 0 0 20 -10
    "/>
      </filter>
    </svg>
  </>
}
