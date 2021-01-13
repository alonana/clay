import React from 'react'
import {TitleStep} from '../title_step/component'
import {ShapeRow} from '../shape_row/component'

export function StepShape() {
  return (
    <div>
      <TitleStep
        label={'בוחרים עיצוב'}
      />
      <ShapeRow shapes={['leaf', 'eye']}/>
    </div>
  )
}
