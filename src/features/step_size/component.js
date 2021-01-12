import React from 'react'
import {SizeOption} from '../size_option/component'

export function StepSize() {
  return (
    <div>
      <div>
        בוחרים גודל צלחת
      </div>
      <SizeOption size={9}/>
      <SizeOption size={11}/>
    </div>
  )
}
