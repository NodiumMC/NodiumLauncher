import { FC, useMemo } from 'react'
import { ClassNamable } from '../../../types/UtilityProps'
import styled from 'styled-components'
import coin from '../../../assets/img/icons/nodiumcoin.svg'
import { mn } from 'madnum'
import { Odometer } from '../Odometer/Odometer'

export interface CoinsProps {
  amount: number
}

const SpanWrapper = styled.span`
  display: inline-flex;
  align-items: flex-start;
  padding: 0 3px;

  img {
    height: 1.2em;
    margin-right: 5px;
  }
`

const AmoundSpan = styled.span`
  font-family: AzeretMono, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: white;
`

export const Coins: FC<CoinsProps & ClassNamable> = ({ amount, className }) => {
  const textAmount = useMemo(
    () =>
      mn(amount, {
        threshold: 99999,
        format: '{num}{unit}',
      }),
    [amount]
  )

  return (
    <SpanWrapper className={className}>
      <img src={coin} alt="coin" />
      <AmoundSpan><Odometer value={textAmount}/></AmoundSpan>
    </SpanWrapper>
  )
}
