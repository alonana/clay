import React from 'react'
import remove from './remove.svg'
import styles from './component.module.css'
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../../app/reducer'

export function CartRemove(props) {
  const item = props.item
  const dispatch = useDispatch()
  return (
    <img
      src={remove}
      className={styles.image}
      alt=""
      onClick={() => {
        dispatch(removeFromCart(item))
      }}
    />
  )
}

