import React from 'react'
import {ColorRow} from '../color_row/component'
import {TitleStep} from '../title_step/component'

export function StepColor() {
  return (
    <div>
      <TitleStep
        label={'בוחרים צבע'}
      />
      <ColorRow colors={['green', 'lightgreen']}/>
      <ColorRow colors={['brown', 'lightblue']}/>
    </div>
  )
}
