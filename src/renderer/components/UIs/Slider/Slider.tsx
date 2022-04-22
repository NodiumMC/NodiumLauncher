import React, { FC, RefObject, useEffect, useRef } from 'react'
import s from './Slider.module.scss'
import { MathUtils } from '../../../../app/utils/MathUtils'
import cn from 'classnames'
import { fromEvent } from 'rxjs'

const SliderThumb: FC<{
  effectMode?: boolean
  label?: string | number
  value: number
  min?: number
  max?: number
  sliderRef: RefObject<HTMLDivElement>,
  onChange: (newValue: number) => void
}> = ({ effectMode, max, min, value, label, sliderRef, onChange }) => {
  const thumb = useRef<HTMLDivElement>(null)

  const draggable = useRef<boolean>(false)
  const offset = useRef(0)

  useEffect(() => {
    const nv = MathUtils.map(+(value ?? 0), +(min ?? 0), +(max ?? 0), 0, 100)
    if (thumb.current) {
      // thumb.current.style.left = `${nv}%`
      thumb.current.style.left = `calc(${nv}% - ${Math.floor(thumb.current.getBoundingClientRect().width/2)}px)`
    }
  }, [value, min, max])

  useEffect(() => {
    if (thumb.current) {
      const dragDown = fromEvent(thumb.current, 'mousedown').subscribe(
        (e) => {
          draggable.current = true
          offset.current = (e as MouseEvent).clientX - (thumb?.current?.getBoundingClientRect()?.x ?? 0)
        }
      )
      const dragUp = fromEvent(document, 'mouseup').subscribe(
        () => {
          draggable.current = false
        }
      )
      const move = fromEvent(document, 'mousemove').subscribe(e => {
        if(sliderRef.current && draggable.current && thumb.current){
          const bound = sliderRef.current.getBoundingClientRect()
          const thumbBound = thumb.current.getBoundingClientRect()
          const mouseX = (e as MouseEvent).clientX - bound.x
          const newval = Math.floor(MathUtils.map(mouseX - offset.current + thumbBound.width/2, 0, bound.width, min ?? 0, max ?? 100))
          onChange(newval < +(min ?? 0) ? min : (newval > +(max ?? 100) ? max : newval) as any)
        }
      })
      return () => {
        dragUp.unsubscribe()
        dragDown.unsubscribe()
        move.unsubscribe()
      }
    }
  },[onChange, min, max])

  return (
    <div className={cn(s.thumb, effectMode && s.effectMode)} ref={thumb}>
      <div className={s.thumbData}><span>{label}</span></div>
    </div>
  )
}

export type SliderProps = {
  value: number,
  min?: number,
  max?: number,
  onChange?: (newValue: number) => void
}

export const Slider: FC<SliderProps> = props => {
  const { value, min, max, onChange } = props

  const fill = useRef<HTMLDivElement>(null)
  const fill2 = useRef<HTMLDivElement>(null)
  const refill = useRef<HTMLDivElement>(null)
  const slider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nv = MathUtils.map(+(value ?? 0), +(min ?? 0), +(max ?? 0), 0, 100)
    if (fill.current && refill.current && fill2.current) {
      fill.current.style.width = `${nv}%`
      fill2.current.style.width = `${nv}%`
      refill.current.style.width = `${99.4 - nv}%`
    }
  }, [value])

  return (
    <>
      <div className={s.container}>
        <div className={s.refill} ref={refill} />
        <div className={s.fill} ref={fill2} />
        <div className={s.back} />
        <div className={cn(s.wrapper, s.nonwrapper)} />
        <SliderThumb
          onChange={onChange ?? (() => {})}
          value={+(value ?? 0)}
          max={+(max ?? 100)}
          min={+(min ?? 0)}
          sliderRef={slider}
          label={value}
        />
        <div className={s.wrapper} ref={slider}>
          <div className={s.back} />
          <div className={s.fill} ref={fill} />
          <SliderThumb
            onChange={onChange ?? (() => {})}
            sliderRef={slider}
            effectMode
            value={+(value ?? 0)}
            max={+(max ?? 100)}
            min={+(min ?? 0)}
          />
        </div>
      </div>
      <svg style={{ display: 'none' }}>
        <filter id="sliderfilter">
          <feGaussianBlur id="SourceGraphic" stdDeviation="4" />
          <feColorMatrix
            values="
       1 0 0 0 0
       0 1 0 0 0
       0 0 1 0 0
       0 0 0 20 -10
    "
          />
        </filter>
      </svg>
    </>
  )
}
