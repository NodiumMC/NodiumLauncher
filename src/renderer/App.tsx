import { FC } from 'react'
import s from './style/app.module.scss'
import { Header } from './components/window/Header/Header'
import { Home } from './components/pages/Home/Home'
import { ObserverComponent } from './components/utils/ObserverComponent'
import { AppPreloader } from './components/containers/AppPreloader/AppPreloader'

export const App: FC = ObserverComponent(() => {
  return (
    <div className={s.appWindow}>
      <Header />
      <div className={s.view}>
        <AppPreloader />
        <Home />
      </div>
    </div>
  )
})
