import React from 'react'

import makeData from '../../../JsonData/customer-list.json'
import CustomTable from '../../components/customTable/CustomTable'
import Layout from '../../components/layout/Layout'


function users() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Users',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
					{
            Header: 'Role',
            accessor: 'role',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Phone',
            accessor: 'phone',
          },
          {
            Header: 'Person Since',
            accessor: 'personSince',
          },
					{
            Header: 'Last Update',
            accessor: 'lastUpdate',
          },
					{
            Header: 'Status',
            accessor: 'status',
          },
				
        ],
      },
     
    ],
    []
  )

  const data = React.useMemo(() => makeData, [])
	
	const action = ["View", "Edit"]
  return (
     <Layout>
			 <CustomTable columns={columns} data={data} action={action}  />
		 </Layout> 
  )
}

export default users