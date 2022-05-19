import { FC } from 'react'
import s from './Input.module.scss'
import { FieldAttributes } from 'formik'
import cn from 'classnames'

export type InputProps = {
  action?: {
    icon: string
    on?: (options: { set: (value: string) => void; value: string }) => void
  }
  locked?: boolean
  error?: boolean
  message?: string
}

export const Input: FC<InputProps & FieldAttributes<any>> = props => {
  const { action, onChange, value, locked, disabled, placeholder, error, message } =
    props

  return (
    <div
      className={cn(
        s.container,
        (locked || disabled) && s.locked,
        disabled && s.disabled,
        error && s.error
      )}
    >
      <div className={s.wrapper}>
        <div className={s.back} />
        <div className={cn(s.back, s.blurred)} />
        <input
          className={s.input}
          {...props}
          required
          disabled={locked || disabled}
          tabIndex={-1}
        />
        {action && (
          <div
            className={s.action}
            onClick={() =>
              action.on &&
              !disabled &&
              action.on((newVal: string) => onChange(newVal), value)
            }
          >
            <img className={s.icon} src={action.icon} alt={'action'} />
          </div>
        )}
        <div className={s.placeholder}>{placeholder}</div>
      </div>
      <div className={s.message}>{message}</div>
    </div>
  )
}
