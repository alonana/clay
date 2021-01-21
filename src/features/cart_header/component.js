import React from 'react'
import styles from './component.module.css'
import cartImage from './cart.svg'

export function CartHeader() {
  return (
    <div
      className={styles.header}
    >
      <img
        className={styles.cartImage}
        src={cartImage}
        alt=""/>

      <div className={styles.title}>
        עגלת קניות
      </div>

    </div>
  )
}
