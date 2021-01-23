import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {makeOrder, selectState} from '../../app/reducer'
import {Button} from '../button/component'

export function CartBuy() {
  const dispatch = useDispatch()
  const state = useSelector(selectState)
  const cart = state.cart
  if (cart.length === 0) {
    return null
  }

  return (
    <Button
      onClick={() => dispatch(makeOrder())}
      value="שלח הזמנה"
    />
  )
}
