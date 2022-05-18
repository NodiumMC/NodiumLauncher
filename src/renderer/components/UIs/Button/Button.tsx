import { FC, ReactNode } from 'react'
import { ClassNamable, OnClickable } from '../../../types/UtilityProps'
import s from './Button.module.scss'
import cn from 'classnames'

export interface ButtonProps {
  icon?: ReactNode | string
  label?: string
  primary?: boolean
  danger?: boolean
  small?: boolean
  disabled?: boolean
}

export const Button: FC<ClassNamable & OnClickable & ButtonProps> = ({
  className,
  onClick,
  icon,
  label,
  primary,
  small,
  disabled,
}) => (
  <div
    className={cn(
      s.button,
      small && s.small,
      primary && s.primary,
      label && s.hasLabel,
      disabled && s.disabled,
      className
    )}
    onClick={!disabled ? onClick : () => {}}
  >
    {icon && (
      <div className={s.iconWrapper}>
        {typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
      </div>
    )}
    {label && <div className={s.label}>{label}</div>}
  </div>
)
