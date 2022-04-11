import React from 'react'
import { GlobalStoreType } from './store.type'

export const StoreContext = React.createContext<GlobalStoreType | null>(null)
