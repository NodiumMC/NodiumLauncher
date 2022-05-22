import { FC, useEffect, useRef } from 'react'
import s from './NavSidebar.module.scss'
import { RoundContainer } from '../RoundContainer'
import { ClassNamable } from '../../../types/UtilityProps'
import cn from 'classnames'
import { NavItem } from './NavItem/NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useNav } from '../../../hooks/useNav'
import { ObserverComponent } from '../../utils/ObserverComponent'
import { Page } from '../../../../app/NavController'

export const NavSidebar: FC<ClassNamable> = ObserverComponent(
  ({ className }) => {
    const navController = useNav()
    const { page } = navController
    const setSelected = path => (navController.page = path)
    const back = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (back.current)
        back.current.style.transform = `translateY(${page * 100}%)`
    }, [page])

    return (
      <RoundContainer className={cn(s.navside, className)}>
        <div className={s.back} ref={back} />
        <NavItem
          rid={Page.Home}
          icon={<FontAwesomeIcon icon={faPlay} />}
          onSelect={setSelected}
          current={page}
        />
      </RoundContainer>
    )
  }
)
