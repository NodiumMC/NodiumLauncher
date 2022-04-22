import React, { useState } from 'react'

export const SuperGap: React.FC<{
  count?: number
}> = ({ count = 1 }) => {
  const gengap: Array<React.ReactElement> = []
  for (let i = 0; i <= count; i++) {
    gengap.push(<br key={i} style={{userSelect: 'none'}}/>)
  }

  return <>{gengap}</>
}
