import { createRoot } from 'react-dom/client'
import { App } from './App'
import 'reflect-metadata'

// import global styles
import './style/global.scss'
import './style/fonts.css'
import { StoreContext } from './store/store.context'
import { createStore } from './store/store.create'
import { ApolloProvider } from '@apollo/client'
import { APIProvider } from '../app/API/APIProvider'
import Container from 'typedi'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <StoreContext.Provider value={createStore()}>
    <ApolloProvider client={Container.get(APIProvider).apollo}>
      <App />
    </ApolloProvider>
  </StoreContext.Provider>
)
