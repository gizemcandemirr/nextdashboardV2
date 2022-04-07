import React from 'react'

import makeData from '../../../JsonData/customer-list.json'
import CustomTable from '../../components/customTable/CustomTable'
import Layout from '../../components/layout/Layout'

import styled from 'styled-components'

const Styles = styled.div`
  padding: 1rem;

  .user {
    background-color: blue;
    color: white;
  }

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`


function users() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        columns: [
          {
            accessor: 'id',
						className: 'user',
          },
         
					
          // {
          //   Header: 'Email',
          //   accessor: 'email',
          // },
          // {
          //   Header: 'Phone',
          //   accessor: 'phone',
          // },
          // {
          //   Header: 'Person Since',
          //   accessor: 'personSince',
          // },
					// {
          //   Header: 'Last Update',
          //   accessor: 'lastupdate',
          // },
					// {
          //   Header: 'Status',
          //   accessor: 'status',
          // },
				
        ]}
				,
				{
					Header: 'Name',
					columns: [
						{
								accessor: 'name',

						},
					]
				 },
				 {
					Header: 'Role',
					columns: [
						{
							accessor: 'role',
						},
					]
				 },

     
    ],
    []
  )

  const data = React.useMemo(() => makeData, [])
	
	const action = [{"id": 1, type:"View"}, {"id": 2, type:"Delete"}]
  return (
     <Layout>
		<Styles>	 <CustomTable columns={columns} data={data} action={action} /> </Styles>
		 </Layout> 
  )
}

export default users