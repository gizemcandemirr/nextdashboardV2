import React from 'react'
import styles from '../../styles/IconButton.module.css'

const IconButton = props => {
  return (
    <div>  
         <button className={styles.buttonHeader}><img src={props.url} width={20} /> <span className={styles.spanHeader}> {props.name} </span></button>
    </div>
  )
}

export default IconButton