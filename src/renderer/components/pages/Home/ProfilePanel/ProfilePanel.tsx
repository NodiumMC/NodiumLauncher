import { FC } from 'react'
import { ClassNamable } from '../../../../types/UtilityProps'
import { RoundContainer } from '../../../containers/RoundContainer'
import cn from 'classnames'
import s from './ProfilePanel.module.scss'
import ls from './Login.module.scss'
import { Title } from '../../../UIs/Title'
import { Input } from '../../../UIs/Input/Input'
import { Button } from '../../../UIs/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { BrandIcon } from '../../../UIs/BrandIcon/BrandIcon'

const Login: FC = () => <div className={ls.login}>
  <Title>Login</Title>
  <Input placeholder={'Login'}/>
  <Input placeholder={'Password'}/>
  <div className={ls.actions}>
    <Button icon={<BrandIcon brand={'discord'}/>} disabled/>
    <Button icon={<BrandIcon brand={'github'}/>} disabled/>
    <Button className={ls.mainAction} label={'Login'} primary small icon={<FontAwesomeIcon icon={faKey}/>}/>
  </div>
</div>

export const ProfilePanel: FC<ClassNamable> = ({className}) => {
  return <RoundContainer className={cn(s.profilecard, className)}>
    <Login/>
  </RoundContainer>
}
