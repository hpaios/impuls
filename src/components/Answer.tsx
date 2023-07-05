import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { nextQuestion, changeStatus, changePrize } from '../reducers/gameSlice'
import { Condition } from '../ts/enum'

interface AnswerProps {
  item: string
  answer: string
  correct: string | undefined
  nextLevelId: string | undefined
  prize: string | undefined
}

export const Answer = (props: AnswerProps) => {

  const { item, answer, correct, nextLevelId, prize } = props

  const [condition, setCondition] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (condition === Condition.SUCCESS) {
      setTimeout(() => {
        dispatch(nextQuestion(nextLevelId))
        dispatch(changeStatus(nextLevelId))
        dispatch(changePrize(prize))
        setCondition('')
      }, 1000)
    } else if (condition === Condition.FAIL) {
      setTimeout(() => {
        dispatch(changeStatus('finish'))
        setCondition('')
      }, 1000)
    }
  }, [condition])

  const getResult = (item: string) => {
    if (correct === item) {
      setCondition(Condition.SUCCESS)
    } else {
      setCondition(Condition.FAIL)
    }
  }

  const changeColor = (item: string) => {
    setCondition(Condition.PENDING)
    setTimeout(() => getResult(item), 1000)
  }

  const getColor = () => {
    if (condition === Condition.FAIL) {
      return 'wrong'
    } else if (condition === Condition.SUCCESS) {
      return 'correct'
    } else if (condition === Condition.PENDING) {
      return 'selected'
    }
  }

  const currentCondition = getColor()
  return (
    <div className={`answer ${currentCondition}`} onClick={() => changeColor(item)}>
      <span>{item}</span>
      {answer}
    </div>
  )
}
