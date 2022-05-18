import { FC, useState } from 'react'
import { RoundContainer } from '../../../containers/RoundContainer'
import { ClassNamable } from '../../../../types/UtilityProps'
import cn from 'classnames'
import s from './MainPanel.module.scss'

export const MainPanel: FC<ClassNamable> = ({ className }) => {
  return <RoundContainer className={cn(s.main, className)}></RoundContainer>
}
