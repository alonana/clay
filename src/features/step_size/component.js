import React from 'react'
import {SizeOption} from '../size_option/component'
import styles from './component.module.css'
import {TitleStep} from '../title_step/component'

export function StepSize() {
  return (
    <div>
      <TitleStep
        label={'בוחרים גודל צלחת'}
      />
      <div className={styles.sizes}>
        <SizeOption size={9}/>
        <SizeOption size={11}/>
      </div>
    </div>
  )
}
