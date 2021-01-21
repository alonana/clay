import React from 'react'
import styles from './component.module.css'
import {useSelector} from 'react-redux'
import {selectState} from '../../app/reducer'
import {Product} from '../product/component'
import {CartHeader} from '../cart_header/component'

export function Cart() {
  const state = useSelector(selectState)
  const cart = state.cart
  const elements = cart.map(item => (
    <Product
      item={item}
      sizeFactor={8}
    />),
  )

  return (
    <div
      className={styles.root}
    >
      <CartHeader/>
      {elements}
    </div>
  )
}
