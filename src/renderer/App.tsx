import { FC, useEffect } from 'react'
import s from './style/app.module.scss'
import { Header } from './components/window/Header/Header'
import { Home } from './components/pages/Home/Home'
import { ObserverComponent } from './components/utils/ObserverComponent'
import { AppPreloader } from './components/containers/AppPreloader/AppPreloader'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { NavSidebar } from './components/pages/Home/NavSidebar/NavSidebar'

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
        <NavSidebar/>
        <div className={s.page}>
          <Routes>
            <Route path={'/'} element={<Home />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
})
