import { FC, useEffect, useRef, useState } from 'react'
import s from './Input.module.scss'
import { Field } from 'formik'
import { FieldAttributes } from 'formik/dist/Field'
import cn from 'classnames'

export type InputProps = {
  formik?: boolean
  action?: {
    icon: string
    on?: (options: { set: (value: string) => void; value: string }) => void
  }
  locked?: boolean
}

export const Input: FC<InputProps & FieldAttributes<any>> = props => {
  const { formik, action, onChange, value, locked, disabled, placeholder } =
    props

  return (
    <div
      className={cn(
        s.container,
        (locked || disabled) && s.locked,
        disabled && s.disabled
      )}
    >
      <div className={s.wrapper}>
        <div className={s.back} />
        <div className={cn(s.back, s.blurred)} />
        {formik ? (
          <Field
            className={s.input}
            {...props}
            required
            disabled={locked || disabled}
          />
        ) : (
          <input
            className={s.input}
            {...props}
            required
            disabled={locked || disabled}
          />
        )}
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
    </div>
  )
}
