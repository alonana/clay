import React from 'react'
import {TitleStep} from '../title_step/component'
import {ShapeRow} from '../shape_row/component'
import {GetShapes} from '../shapes/component'

export function StepShape() {
  let yourArray = GetShapes()
  let halfwayThrough = Math.floor(yourArray.length / 2)

  let first = yourArray.slice(0, halfwayThrough)
  let second = yourArray.slice(halfwayThrough, yourArray.length)
  return (
    <div>
      <TitleStep
        label={'בוחרים עיצוב'}
      />
      <ShapeRow shapes={first}/>
      <ShapeRow shapes={second}/>
    </div>
  )
}
