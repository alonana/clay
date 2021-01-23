import React from 'react'
import {useSelector} from 'react-redux'
import {selectState} from '../../app/reducer'
import logo from '../../logo.png'
import {Steps} from '../steps/component'
import {Product} from '../product/component'
import {AddToCart} from '../add_to_cart/component'
import styles from './component.module.css'

export function Design() {
  const state = useSelector(selectState)
  const current = state.current

  return (
    <div className="App">
      <div className="App-header">
        <img
          src={logo}
          className={styles.logo}
          alt="logo"
        />
        <Steps/>
        <Product
          item={current}
          sizeFactor={20}
        />
        <AddToCart/>
      </div>
    </div>
  )
}
