import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectState, setSize} from '../../app/reducer'
import styles from './component.module.css'

export function SizeOption(props) {
  const state = useSelector(selectState)
  const dispatch = useDispatch()
  const size = props.size

  const selected = size === state.size
  const style = selected ? styles.selected : styles.standard

  const radius = `${size * 20}px`

  return (
    <div
      className={styles.root}
      onClick={() => dispatch(setSize(size))}
    >
      <div
        className={styles.content}
      >
        <div
          className={styles.dot}
          style={{height: radius, width: radius}}
        />
        <div
          className={style}
        >
          קוטר {size} ס"מ
        </div>
      </div>
    </div>
  )
}
