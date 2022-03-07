import { Grid, Typography, Card, CardContent, CardMedia} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TableHeader from '../../components/tableHeader/TableHeader.js'
const advanced = () => {
  const data= [{name: 'Add User', url: '/sidebarIcon/plus.png'}, {name: 'Add Role', url: '/sidebarIcon/plus.png'}]

  return (
     
    <Grid container spacing={2}>
       <Grid item xs={12} md={12}>
       <img src="/sidebarIcon/back.png" />
       </Grid>
       <Grid item xs={12} md={12}>
       <Typography variant="h5">Permissions</Typography>
       <Typography >Manage what users an see or do in your store</Typography>
       </Grid>

       <Grid item xs={12} md={12}>
         <Card sx={{ display: 'flex' }}>
         <CardMedia
        component="img"
        sx={{ width: 120 }}
        image="/sidebarIcon/account.png"
        alt="Live from space album cover"
      />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h6">Store Owner</Typography>
         <Typography>Gizem Candemir</Typography>
            <Typography> Last login was Wednesday, February 23, 2022 11.38</Typography> 
            </CardContent>
          </Box>
    
         </Card>

      

       </Grid>
    
       <Grid item xs={12} md={12}>
         <Card sx={{ display: 'flex' }}>
        
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h6">User (0,50)</Typography>
         <Typography>Customize what your staff members can edit and access</Typography>
         <TableHeader data={data}  />

            </CardContent>
          </Box>
    
         </Card>

      

       </Grid>

    </Grid>

  )
}

export default advanced