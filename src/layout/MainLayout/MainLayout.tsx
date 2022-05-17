import Head from 'next/head'
import React from 'react'
import Header from '../../components/header/Header'
import RoadHeader from '../../components/roadheader/RoadHeader'
import Sidebar from '../../components/sidebar/Sidebar'

const MainLayout = ({title,children}:any) => {

  return (
	<>
    <div className='h-screen flex'>
			 
       <div className='w-64'>
         <Sidebar/>
        </div>
        <div className='flex-1 min-w-0'>
           <Header /> 
		      	{title && <RoadHeader title={title} /> }
            {children}
        </div>
    </div>
      
	</>
     
    
  
  )
}

export default MainLayout