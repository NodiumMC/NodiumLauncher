import { FC, useEffect, useRef, useState } from 'react'
import s from './NavSidebar.module.scss'
import { RoundContainer } from '../../../containers/RoundContainer'
import { ClassNamable } from '../../../../types/UtilityProps'
import cn from 'classnames'
import { NavItem } from './NavItem/NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faGear, faDiceD6 } from '@fortawesome/free-solid-svg-icons'

export const NavSidebar: FC<ClassNamable> = ({ className }) => {
  const [selected, setSelected] = useState(0)
  const back = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(back.current)
      back.current.style.transform = `translateY(${selected * 100}%)`
  },[selected])

  return <RoundContainer className={cn(s.navside, className)}>
    <div className={s.back} ref={back}/>
    <NavItem rid={0} icon={<FontAwesomeIcon icon={faPlay}/>} path={'/'} onSelect={setSelected}/>
    <NavItem rid={1} icon={<FontAwesomeIcon icon={faDiceD6}/>} path={'/console'} onSelect={setSelected}/>
    <NavItem rid={2} icon={<FontAwesomeIcon icon={faGear}/>} path={'/instances'} onSelect={setSelected}/>
  </RoundContainer>
}
