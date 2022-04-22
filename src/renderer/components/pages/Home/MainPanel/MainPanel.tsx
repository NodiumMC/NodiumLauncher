import { FC, useEffect, useState } from 'react'
import { RoundContainer } from '../../../containers/RoundContainer'
import { ClassNamable } from '../../../../types/UtilityProps'
import cn from 'classnames'
import s from './MainPanel.module.scss'
import ss from './Settings.module.scss'
import { InstanceList } from '../InstanceList/InstanceList'
import { Button } from '../../../UIs/Button/Button'
import { faPlus, faGear, faPlay, faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ObserverComponent } from '../../../utils/ObserverComponent'
import { useStore } from '../../../../hooks/useStore'
import { InstancesLSModel } from '../../../../../app/localstorage/models/InstancesLSModel'
import { SUnit } from '../../../UIs/SUnit/SUnit'
import { Slider } from '../../../UIs/Slider/Slider'
import { Input } from '../../../UIs/Input/Input'
import prettyBytes from 'pretty-bytes'

interface SubMainProps {
  setSettingActive: Function
}

const SubMain: FC<ClassNamable & SubMainProps> = ObserverComponent(({ className, setSettingActive }) => {

  const insmanager = useStore(s => s.instancesManager)

  return <div className={cn(s.submain, className)}>
    <InstanceList className={s.mainList} />
    <div className={s.mainActionPanel}>
      <Button small icon={<FontAwesomeIcon icon={faGear} />} onClick={() => setSettingActive(true)}/>
      <Button primary small icon={<FontAwesomeIcon icon={faPlay} />} label={'Play'} />
      <Button small icon={<FontAwesomeIcon icon={faPlus} />} onClick={async () => {
        await insmanager.create()
        setSettingActive(true)
      }}/>
    </div>
  </div>
})

interface SettingsProps {
  setSettingActive: Function
}

const Settings: FC<ClassNamable & SettingsProps> = ObserverComponent(({ className, setSettingActive }) => {

  const insm = useStore(s => s.instancesManager)

  const [maxRam, setMaxRam] = useState(2048)

  useEffect(() => {
    window.electron.ipcRenderer.getMaxRAM().then(v => setMaxRam(v))
  })

  return <div className={cn(ss.settings, className)}>
    <div className={ss.header}>
      <FontAwesomeIcon icon={faArrowLeft} className={ss.backico} onClick={() => setSettingActive(false)}/>
      <div className={ss.name}>{insm.selected?.info?.name ?? 'Loading'}</div>
    </div>

    {/*<SUnit>*/}
    {/*  /!*<Slider value={insm.selected.settings.alloc} min={0} max={maxRam} onChange={v => insm.selected.settings.alloc = v}/>*!/*/}
    {/*  <Input type={'number'} placeholder={'RAM'} value={insm.selected?.settings?.alloc ?? 2048} onChange={v => insm.selected.settings.alloc = v.target.value}/>*/}
    {/*</SUnit>*/}
    {/*<div className={ss.settingActions}>*/}
    {/*  <Button primary small label={'Save'} icon={<FontAwesomeIcon icon={faSave}/>} onClick={}/>*/}
    {/*</div>*/}

  </div>
})

export const MainPanel: FC<ClassNamable> = ({ className }) => {

  const [settingsActive, setSettingsActive] = useState(false)

  return <RoundContainer className={cn(s.main, settingsActive && s.settingsActive, className)}>
    <SubMain className={s.controlMain} setSettingActive={setSettingsActive}/>
    <Settings className={s.controlSettings} setSettingActive={setSettingsActive}/>
  </RoundContainer>
}
