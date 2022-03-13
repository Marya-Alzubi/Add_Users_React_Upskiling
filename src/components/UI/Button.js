import React from 'react'

import styles from './Button.module.css'

const Button = props => {
  return (
    <button className={styles.button}>{props.content}</button>
  )
}

export default Button