import React from 'react'
import {Product} from '../product/component'
import {CartRemove} from '../cart_remove/component'
import styles from './component.module.css'

export function CartProduct(props) {
  const item = props.item

  return (
    <div
      className={styles.root}
    >
      <CartRemove
        item={item}
      />
      <Product
        item={item}
        sizeFactor={8}
      />
    </div>
  )
}

