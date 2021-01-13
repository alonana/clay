import React from 'react'
import {useSelector} from 'react-redux'
import {selectState} from '../../app/reducer'
import styles from './component.module.css'
import {StepSize} from '../step_size/component'
import {StepColor} from '../step_color/component'
import {MoveStep} from '../move_step/component'
import {StepShape} from '../step_shape/component'

export function Steps() {
  const state = useSelector(selectState)

  let step
  switch (state.stepId) {
    case 0:
      step = (<StepSize/>)
      break
    case 1:
      step = (<StepColor/>)
      break
    case 2:
      step = (<StepShape/>)
      break
    default:
      console.log('not ready step')
  }
  return (
    <div>
      <div className={styles.row}>
        <div>
          <MoveStep offset={1}/>
          <MoveStep offset={-1}/>
        </div>
        {step}
      </div>
    </div>
  )
}
