import Head from 'next/head'
import React from 'react'
import Header from '../header/Header'
import RoadHeader from '../roadheader/RoadHeader'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({title,children}) => {

  return (
	<>
    <div className='h-screen flex'>
			 
       <div className='w-64'>
         <Sidebar/>
        </div>
        <div className='flex-1 min-w-0'>
           <Header /> 
					 <RoadHeader title={title} />
             {children}
        </div>
    </div>
      
	</>
     
    
  
  )
}

export default Layout