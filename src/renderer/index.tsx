import { createRoot } from 'react-dom/client'
import { App } from './App'

// import flobal styles
import './style/global.scss'
import './style/fonts.css'
import { StoreContext } from './store/store.context'
import { createStore } from './store/store.create'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <StoreContext.Provider value={createStore()}>
    <App />
  </StoreContext.Provider>
)
