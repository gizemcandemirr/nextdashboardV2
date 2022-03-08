import  IconButton  from '../iconButton/IconButton.js'
import React from 'react'
import styles from '../../styles/TableHeader.module.css'
import SearchBar from '../searchBar/SearchBar'
import Image from 'next/image'

const TableHeader = props => {
   const data = props.data

  return (
    <div className={styles.headerContent}>
      <div className={styles.backItems}>
         <Image src="/sidebarIcon/back.png" alt="back" width={24} height={24} /> 
         <span>user roles</span>
      </div>
    <div className={styles.rightItems}>
         <SearchBar />
        <div className={styles.buttonGroup}>
          {
            data.map((prop) => (
              <IconButton name={prop.name} url={prop.url}/>
            ))
          }
      
        </div>  
    </div>

    </div>
  )
}

export default TableHeader