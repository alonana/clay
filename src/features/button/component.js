import React from 'react'
import styles from './component.module.css'

export function Button(props) {
  const disabled = props.disabled
  const value = props.value
  const onClick = props.onClick

  let additionalStyle
  if (disabled) {
    additionalStyle = styles.buttonDisabled
  } else {
    additionalStyle = styles.buttonEnabled
  }

  return (
    <button
      className={`${styles.button} ${additionalStyle}`}
      aria-label=""
      onClick={() => {
        if (!disabled) {
          onClick()
        }
      }
      }
    >
      {value}
    </button>
  )
}
