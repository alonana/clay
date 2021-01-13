import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectState, setStep} from '../../app/reducer'
import styles from './component.module.css'

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

  let additionalStyle
  if (enabled) {
    additionalStyle = styles.buttonEnabled
  } else {
    additionalStyle = styles.buttonDisabled
  }

  return (
    <button
      className={`${styles.button} ${additionalStyle}`}
      aria-label="Increment value"
      onClick={() => {
        if (enabled) {
          dispatch(setStep(newStep))
        }
      }
      }
    >
      {label}
    </button>
  )
}
