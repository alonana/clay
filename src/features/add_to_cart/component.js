import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../app/reducer'
import {Button} from '../button/component'

export function AddToCart(props) {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() => {
        dispatch(addToCart())
      }}
      value="הוסף לעגלת הקניות"
    />
  )
}

