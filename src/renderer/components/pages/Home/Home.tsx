import { FC } from 'react'
import { Root } from '../../utils/Root'
import s from './Hone.module.scss'
import { RoundContainer } from '../../containers/RoundContainer'
import { UserCard } from './UserCard/UserCard'

export const Home: FC = () => {
  return <Root>
    <div className={s.wrapper}>
      <UserCard className={s.usercard}/>
      <RoundContainer className={s.profile}>

      </RoundContainer>
      <RoundContainer className={s.main}>

      </RoundContainer>
      <RoundContainer className={s.news}>

      </RoundContainer>
    </div>
  </Root>
}
