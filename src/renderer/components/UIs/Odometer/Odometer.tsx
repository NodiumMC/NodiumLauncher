import { FC } from 'react'
import { ClassNamable } from '../../../types/UtilityProps'
import styled from 'styled-components'

export interface OdometerProps {
  value: string | number
}

const digits = '0123456789'.split('')
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const RelativeSpan = styled.div`
  display: inline-block;
  position: relative;
  color: white;
  height: 14px;
  width: 9px;
  overflow: hidden;
`

const Symbol = styled.span<{ step: number; bias: number }>`
  font-family: AzeretMono, sans-serif;
  font-weight: 700;
  font-size: 14px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: translateY(${({ step, bias }) => `${step * 100 - bias * 100}%`});
  transition: all .3s;
`

const Void = styled.span`
  opacity: 0;
`

const Unit: FC<{ symbol: string }> = ({ symbol }) => {
  const isDigit = digits.includes(symbol)
  const bias = isDigit ? digits.indexOf(symbol) : letters.indexOf(symbol)
  return (
    <RelativeSpan>
      <Void>0</Void>
      {(isDigit ? digits : letters).map((v, i) => (
        <Symbol bias={bias} step={i}>
          {v}
        </Symbol>
      ))}
    </RelativeSpan>
  )
}


export const Odometer: FC<OdometerProps & ClassNamable> = ({
  value,
  className,
}) => {
  return (
    <span>
      {String(value).split('').map(v => <Unit symbol={v} />)}
    </span>
  )
}
