import { observer } from 'mobx-react'
import React from 'react'

export const ObserverComponent = <T>(component: React.FC<T>) =>
  observer(component)
