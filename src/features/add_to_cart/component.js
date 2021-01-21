import styles from './component.module.css'
import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../app/reducer'

export function AddToCart(props) {
  const dispatch = useDispatch()
  return (
    <div
      className={styles.button}
      onClick={() => {
        dispatch(addToCart())
      }}
    >
      הוסף לעגלת הקניות
    </div>
  )
}

