import { FC } from 'react'
import s from './BrandIcon.module.scss'
import { faGoogle, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface BrandIconProps {
  brand: 'google' | 'github' | 'discord'
}

export const BrandIcon: FC<BrandIconProps> = ({brand}) => {

  return <>
    <svg width="0" height="0">
      <linearGradient id="google-brand-gradient">
        <stop stopColor="#30e8bf" offset="0%" />
        <stop stopColor="#ff8235" offset="100%" />
      </linearGradient>
      <linearGradient id="discord-brand-gradient">
        <stop stopColor="#6190e8" offset="0%" />
        <stop stopColor="#a7bfe8" offset="100%" />
      </linearGradient>
      <linearGradient id="github-brand-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop stopColor="#6441a5" offset="0%" />
        <stop stopColor="#2a0845" offset="100%" />
      </linearGradient>
    </svg>
    {(() => {
      switch (brand){
        case 'google':
          return <FontAwesomeIcon className={s.google} aria-hidden icon={faGoogle}/>
        case 'discord':
          return <FontAwesomeIcon className={s.discord} icon={faDiscord}/>
        case 'github':
          return <FontAwesomeIcon className={s.github} icon={faGithub}/>
      }
    })()}
  </>
}
