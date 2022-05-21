import { FC, useMemo } from 'react'
import s from './Signal.module.scss'
import styled from 'styled-components'
import cn from 'classnames'

interface SignalProps {
  tiles: number
}

const SignalTile = styled.div<{
  height: '100%' | '66%' | '33%',
}>`
  width: 4px;
  height: ${({ height }) => height};
  background-color: rgb(58, 63, 73);
  border-radius: 5px;
  transition: all .3s;
  flex-shrink: 0;
`

export const Signal: FC<SignalProps> = ({ tiles }) => {

  const color = useMemo(() => {
    switch (tiles) {
      case 1: return 'color1'
      case 2: return 'color2'
      case 3: return 'color3'
      default: return 'color'
    }
  }, [tiles])

  const hide = useMemo(() => tiles === 3,[tiles])

  return <div className={s.signal}>
    <div className={cn(s.wrapper, hide && s.hide)}>
      <SignalTile height={'33%'} className={s[tiles > 0 ? color : '']}/>
      <SignalTile height={'66%'} className={s[tiles > 1 ? color : '']}/>
      <SignalTile height={'100%'} className={s[tiles > 2 ? color : '']}/>
    </div>
  </div>
}
