import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectState, setColor} from '../../app/reducer'
import styles from './component.module.css'

export function ColorOption(props) {
  const state = useSelector(selectState)
  const dispatch = useDispatch()
  const color = props.color

  const selected = color === state.color
  const style = selected ? styles.selected : styles.standard
  return (
    <div>
      <div
        className={style}
        onClick={() => dispatch(setColor(color))}
      >
        <div
          className={styles.color}
          style={{'background-color': color}}
        />
      </div>
    </div>
  )
}
