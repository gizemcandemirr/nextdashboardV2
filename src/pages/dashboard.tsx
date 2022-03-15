import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const dashboard = () => {
	return (
   <div className='h-screen flex'>
		<div className='w-64'>
			<Sidebar/>
		 </div>
		 <div className='flex-1 min-w-0'>
				<Header /> 
	     
		 </div>
 </div>
	)
}

export default dashboard