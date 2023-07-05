import React from 'react'
import { convertToPrise } from './../helpers/converter'

interface PrizeProps {
  active: boolean
  prize: string
  isPassed: boolean
}

export const Prize = (props: PrizeProps) => {

  const { active, isPassed, prize } = props

  const isActive = active ? 'active' : ''
  const passed = isPassed ? 'passed' : ''

  return (
    <>
      <div className={`prize-item ${isActive} ${passed}`}>$ {convertToPrise(prize)}</div>
    </>
  )
}
