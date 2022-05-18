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
import { Field, Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  login: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required')
})

const Login: FC = () => (
  <div className={ls.login}>
    <Formik
      validationSchema={LoginSchema}
      initialValues={{
        login: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
      }}
    >
      {({ submitForm }) => (
        <>
          <Title>Login</Title>
          <Field name={'login'}>
            {({ field, meta }) => <Input placeholder={'Login'} {...field} error={meta.touched && meta.error} message={meta.error}/>}
          </Field>
          <Field name={'password'}>
            {({ field, meta }) => <Input placeholder={'Password'} {...field} error={meta.touched && meta.error} message={meta.error}/>}
          </Field>
          <div className={ls.actions}>
            <Button icon={<BrandIcon brand={'discord'} />} disabled />
            <Button icon={<BrandIcon brand={'github'} />} disabled />
            <Button
              className={ls.mainAction}
              label={'Login'}
              primary
              small
              icon={<FontAwesomeIcon icon={faKey} />}
              onClick={submitForm}
            />
          </div>
        </>
      )}
    </Formik>
  </div>
)

export const ProfilePanel: FC<ClassNamable> = ({ className }) => {
  return (
    <RoundContainer className={cn(s.profilecard, className)}>
      <Login />
    </RoundContainer>
  )
}
