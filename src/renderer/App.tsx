import { FC, useEffect } from 'react'
import s from './style/app.module.scss'
import { Header } from './components/window/Header/Header'
import { Home } from './components/pages/Home/Home'
import { ObserverComponent } from './components/utils/ObserverComponent'
import { AppPreloader } from './components/containers/AppPreloader/AppPreloader'
import { NavSidebar } from './components/containers/NavSidebar/NavSidebar'
import { Router } from './components/containers/Router/Router'
import { useNavigate } from 'react-router-dom'

export const App: FC = ObserverComponent(() => {
  const nav = useNavigate()

  useEffect(() => {
    nav('/', { replace: true })
  },[])

  return (
    <div className={s.appWindow}>
      <Header />
      <div className={s.view}>
        <AppPreloader />
        <NavSidebar className={s.nav}/>
        <div className={s.page}>
          <Router>
            <Home />
          </Router>
        </div>
      </div>
    </div>
  )
})
