import React from 'react'
import styles from './component.module.css'
import {useSelector} from 'react-redux'
import {selectState} from '../../app/reducer'
import {GetShape} from '../shapes/component'

export function Product(props) {
  const state = useSelector(selectState)
  const size = state.size
  const color = state.color
  const shape = state.shape
  const radius = `${size * 20}px`
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

