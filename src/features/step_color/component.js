import React from 'react'
import {ColorOption} from '../color_option/component'

export function StepColor() {
  return (
    <div>
      <div>
        בוחרים צבע
      </div>
      <ColorOption color={'green'}/>
      <ColorOption color={'brown'}/>
      <ColorOption color={'blue'}/>
    </div>
  )
}
