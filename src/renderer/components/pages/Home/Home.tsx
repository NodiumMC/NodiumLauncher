import { FC } from 'react'
import { Root } from '../../utils/Root'
import s from './Home.module.scss'
import { RoundContainer } from '../../containers/RoundContainer'
import { UserCard } from './UserCard/UserCard'
import { ProfilePanel } from './ProfilePanel/ProfilePanel'
import { MainPanel } from './MainPanel/MainPanel'

export const Home: FC = () => {
  return (
    <Root>
      <div className={s.wrapper}>
        <UserCard className={s.usercard} />
        <ProfilePanel className={s.profile} />
        <MainPanel className={s.main} />
        <RoundContainer className={s.news}></RoundContainer>
      </div>
    </Root>
  )
}
