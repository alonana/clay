import React from 'react'
import styles from './component.module.css'
import {GetShape} from '../shapes/component'

export function Product(props) {
  const sizeFactor = props.sizeFactor
  const item = props.item
  const size = item.size
  const color = item.color
  const shape = item.shape
  const radius = `${size * sizeFactor}px`
  return (
    <div>
      <img
        src={GetShape(shape)}
        className={styles.image}
        alt={''}
        style={{
          height: radius,
          width: radius,
          backgroundColor: color,
        }}
      />
    </div>
  )
}

