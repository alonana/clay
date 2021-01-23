import React from 'react'
import styles from './component.module.css'
import {useSelector} from 'react-redux'
import {selectState} from '../../app/reducer'
import {CartHeader} from '../cart_header/component'
import {CartBuy} from '../cart_buy/component'
import {CartProduct} from '../cart_product/component'

export function Cart() {
  const state = useSelector(selectState)
  const cart = state.cart
  const elements = cart.map(item => (
    <CartProduct
      item={item}
    />),
  )

  return (
    <div
      className={styles.root}
    >
      <CartHeader/>
      {elements}
      <CartBuy/>
    </div>
  )
}
