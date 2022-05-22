import React from 'react'

import makeData from '../../../JsonData/customer-list.json'
import TableHeader from '../../components/customTable/TableHeader'
import Layout from '../../components/layout/Layout'


function User() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
       column: 'id',	
			 accessor:"id"		
			}
			,
			{
				Header: 'Name',
				column:'name',
				accessor:"name"
		 },
		 {
			Header: 'Role',
			column: 'role',
			accessor:"role"
		 },
		 {
			Header: 'Email',
			column: 'email',
			accessor:"email"
		 },
		 {
			Header: 'Phone',
			column: 'phone',
			accessor:"phone"
		 },
		 {
			Header: 'Person Since',
			column: 'personSince',
			accessor:"personSince"
		 },
		 {
			Header: 'Last Update',
			column: 'lastupdate',
			accessor:"lastupdate"
		 },
		 {
			Header: 'Status',
			column: 'status',
			accessor:"status"
		 },

    ],
    []
  )

  const data = React.useMemo(() => makeData, [])
	
	const action = [{"id": 1, type:"View"}, {"id": 2, type:"Delete"}]
  return (
     <Layout title="Users">
       	 <div className="px-5 py-5 ml-5 mr-5">
					 <TableHeader title="Product List" />
				 </div>
		
	    
		 </Layout> 
  )
}

export default User