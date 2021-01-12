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
  return (
    <div>
      <div
        className={style}
        onClick={() => dispatch(setSize(size))}
      >
        קוטר {size} ס"מ
      </div>
    </div>
  )
}
