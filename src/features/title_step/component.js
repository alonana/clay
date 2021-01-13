import React from 'react'
import styles from './component.module.css'

export function TitleStep(props) {
  return (
    <div className={styles.title}>
      {props.label}
    </div>
  )
}
