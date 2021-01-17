import React from 'react'
import {ColorRow} from '../color_row/component'
import {TitleStep} from '../title_step/component'

export function StepColor() {
  return (
    <div>
      <TitleStep
        label={'בוחרים צבע'}
      />
      <ColorRow colors={['#f4e9e9', '#e8cccc','#efcaca','#d89f9f']}/>
      <ColorRow colors={['#d7e6e5', '#c9e7ed','#b2d9df','#90afb4']}/>
      <ColorRow colors={['#fffae3', '#feffd0','#cbe4d6','#a3bf9e']}/>
    </div>
  )
}
