import React from 'react'

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css'
const ErrorModal = props => {
  return (
    <div className={styles.backdrop} onClick={props.onClickOkHandle}>
      <Card passingClassName={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onOkButtonClick={props.onClickOkHandle}content='OK' />
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal