import Head from 'next/head'
import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({children}) => {

  return (
	<>
    <div className='h-screen flex'>
			
       <div className='w-64'>
         <Sidebar/>
        </div>
        <div className='flex-1 min-w-0'>
           <Header /> 
             {children}
        </div>
    </div>
      
	</>
     
    
  
  )
}

export default Layout