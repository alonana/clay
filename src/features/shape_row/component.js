import React from 'react'
import styles from './component.module.css'
import {ShapeOption} from '../shape_option/component'

export function ShapeRow(props) {
  const shapes = props.shapes

  const elements = shapes.map((shape) => (<ShapeOption shape={shape}/>))

  return (
    <div
      className={styles.root}
    >
      {elements}
    </div>
  )
}
