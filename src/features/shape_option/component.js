import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectState, setShape} from '../../app/reducer'
import styles from './component.module.css'
import {GetShape} from '../shapes/component'

export function ShapeOption(props) {
  const state = useSelector(selectState)
  const dispatch = useDispatch()
  const shape = props.shape

  const selected = shape === state.shape
  const style = selected ? styles.selected : styles.standard

  return (
    <div>
      <div
        className={style}
        onClick={() => dispatch(setShape(shape))}
      >
        <img
          className={styles.shape}
          src={GetShape(shape)}
          alt=""
        />
      </div>
    </div>
  )
}
