import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import users from '../../../JsonData/user_list.json'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone',type: 'Phone',width: 150,},
    { field: 'role', headerName: 'Role',type: 'Role',width: 150,
    renderCell: (params) => {
        return <div className={`cellWithStatus ${params.row.role}`}>
       {params.row.role}
              </div>
    }
      }
  
  ];
  
const DataGridTable = () => {
  
    const actionColumn = [{filed:"action", headerName:"Action", width:'200', renderCell:()=>{
        return(
            <div className='flex items-center'>
                   <div> <button className='pr-5'>View </button></div>
                   <div><button >Delete </button></div>
            </div>
        )
    }}]


  return (
    <div style={{ height: 650, width: '100%', display:'flex' }}>
    <DataGrid
      rows={users}
      columns={columns.concat(actionColumn)}
      pageSize={10}
      rowsPerPageOptions={[15]}
      checkboxSelection
    />
  </div>
  )
}

export default DataGridTable