import React from 'react'
import './appStyles.css'
import styles from './appStyles.module.css'

function AppStyles() {
  return (
    <div>
        <h2>Using Regular .css</h2>
        <h1 className='success'>Message delivered successfully</h1>
        <h1 className='error'>Failed to deliver the mesage</h1>

        <br />
        <h2>Using module.css</h2>
        <h1 className={styles.success}>Message delivered successfully</h1>
        <h1 className={styles.error}>Failed to deliver the mesage</h1>
    </div>
  )
}

export default AppStyles