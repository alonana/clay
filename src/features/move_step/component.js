import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectState, setStep} from '../../app/reducer'
import {Button} from '../button/component'

export function MoveStep(props) {
  const state = useSelector(selectState)
  const dispatch = useDispatch()
  const stepId = state.stepId
  const maxStep = state.maxStep
  const offset = props.offset

  let label
  if (offset === 1) {
    label = '⇦'
  } else {
    label = '⇨'
  }

  const newStep = stepId + offset
  const enabled = newStep >= 0 && newStep <= maxStep

  function click() {
    dispatch(setStep(newStep))
  }

  return (
    <Button
      disabled={!enabled}
      onClick={click}
      value={label}
    />
  )
}
