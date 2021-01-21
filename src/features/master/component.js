import React from 'react'
import styles from './component.module.css'
import {Cart} from '../cart/component'
import {Design} from '../design/component'

export function Master() {
  return (
    <div className={styles.root}>
      <Cart/>
      <Design/>
    </div>
  )
}

