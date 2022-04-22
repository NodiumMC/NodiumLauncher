export interface ClassNamable {
  className?: string
}

export interface OnClickable {
  onClick?: () => any
}

export interface Valuable<T> {
  value?: T
}

export interface DataEntriable<T> extends Valuable<T> {
  onChange?: (newValue: T) => any
}

