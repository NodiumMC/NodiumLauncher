import { FC } from 'react'
import s from './style/app.module.scss'
import { Header } from './components/window/Header/Header'
import { Home } from './components/pages/Home/Home'

export const App: FC = () => {
  return <div className={s.appWindow}>
    <Header />
    <div className={s.view}>
      <Home />
    </div>
  </div>
}
