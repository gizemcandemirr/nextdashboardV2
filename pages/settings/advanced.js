import { Grid, Typography, Card, CardContent} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from '../../styles/Advanced.module.css'

const advanced = () => {
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
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h6">Store Owner</Typography>
         <Typography>Gizem Candemir</Typography>
            <Typography> Last login was Wednesday, February 23, 2022 11.38</Typography> 
            </CardContent>
         
          </Box>

         </Card>

       
       <img src="/sidebarIcon/account.png" width={24} />
      

       </Grid>
       
       <Grid item xs={12} md={12}>
       <Typography>User (0,50</Typography>

     </Grid>

    </Grid>

  )
}

export default advanced