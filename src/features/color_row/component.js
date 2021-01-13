import React from 'react'
import styles from './component.module.css'
import {ColorOption} from '../color_option/component'

export function ColorRow(props) {
  const colors = props.colors

  const elements = colors.map((color) => (<ColorOption color={color}/>))

  return (
    <div
      className={styles.root}
    >
      {elements}
    </div>
  )
}
