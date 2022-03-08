import Image from 'next/image'
import React from 'react'
import styles from '../../styles/StatusCard.module.css'

const StatusCard = props => {
  return (
    <div className={styles.statusCard}>
          <div className={styles.statusCardIcon}>
            <Image src={props.icon} alt="fff" width={24} height={24} />
          </div> 
          
          <div className={styles.statusCardInfo}>
            <h4>{props.count}</h4>
            <span>{props.title}</span>
          </div>

    </div>
  )
}

export default StatusCard