import { FC, useEffect, useState } from 'react'
import { RoundContainer } from '../../../containers/RoundContainer'
import s from './UserCard.module.scss'
import cn from 'classnames'
import { randpix, RandpixColorScheme } from 'randpix'
import { ClassNamable } from '../../../../types/UtilityProps'
import { Coins } from '../../../UIs/Coins/Coins'
import { Odometer } from '../../../UIs/Odometer/Odometer'

const schemes = Object.values(RandpixColorScheme)

const avatar = randpix({
  colorScheme: schemes[(Math.random() * schemes.length) >> 0],
  scale: 32,
  grayscaleBias: true,
  colorBias: 25,
})().toDataURL()

export const UserCard: FC<ClassNamable> = ({ className }) => {
  return <RoundContainer className={cn(s.usercard, className)}>
    <img className={s.backroundAva} alt={''} src={avatar} />
    <div className={s.wrapper}>
      <div className={s.majorUserInfo}>
        <img className={s.avatar} alt={'avatar'} src={avatar} />
        <div className={s.textInfo}>
          <div className={s.username}>LIMPIX31</div>
          <div className={s.status}></div>
        </div>
      </div>
      <div></div>
    </div>
  </RoundContainer>
}
