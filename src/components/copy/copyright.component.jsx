
import React from 'react'
import { Box, Grid, Typography } from '@mui/material';


const CopyRight = () => {
  return (
    <Box style={{ background: '#313638', padding: '20px' }}>
      <Grid container className='common-grid-container'>
        <Grid item xs={12}>
          <Typography variant='subtitle2' style={{ color: '#dcdcdc', fontSize: '12px' }}>© Copyright © Norisys. All Rights Reserved | Imprint  Data Protection</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
export default CopyRight