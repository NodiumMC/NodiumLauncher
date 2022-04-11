import { createRoot } from 'react-dom/client'
import { App } from './App'

// import flobal styles
import './style/global.scss'
import './style/fonts.css'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App />)
