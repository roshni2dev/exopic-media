
import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import './presentation.styles.css';

const Presentation = () => {
    return (
        <Box className='common-container'>
            <Grid container  spacing={2}  className='common-grid-container'>
                <Grid item xs={12}>
                    <Typography variant='h5' style={{ marginBottom: '20px' }} className='primary-heading'>
                        CUBE Series
                        <span style={{ color: '#a7abaf' }}>&nbsp;Presentation</span>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <iframe title='youtube-embed-video' src="https://www.youtube.com/embed/rAOr1Z274X4" frameborder="0" className='iframe-video' />
                </Grid>
            </Grid>
        </Box>





    )
}
export default Presentation