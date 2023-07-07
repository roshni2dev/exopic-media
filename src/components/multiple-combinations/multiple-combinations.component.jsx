
import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import image1 from '../../assets/2.jpeg';
import './multiple-combinations.styles.css';

const MultipleCombinations = () => {
    return (
        <Box className='common-container'>
            <Grid container  spacing={2}  className='common-grid-container'>
                <Grid item xs={12}>
                    <Typography variant='h5' style={{ marginBottom: '20px' }} className='primary-heading'>
                        CUBE Series
                        <span style={{ color: '#a7abaf' }}>&nbsp;Multiple Combinations</span>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src={image1} style={{ width: '100%' }} alt='' />
                </Grid>
            </Grid >
        </Box>






    )
}
export default MultipleCombinations