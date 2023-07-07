import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import background from '../../assets/header-background.jpeg'
import image from '../../assets/1.jpg'
import './header.styles.css';
import Navigation from '../navigation/navigation.component';

// const useStyles = makeStyles(() => ({
// container:{
//     height: '100vh',
// }
// }))


const Header = () => {
    return (
        <Box className='header-background' style={{ backgroundImage: `url(${background})` }}>
            <Box className="blur-layer">
                <Navigation />
                <Box className="header-text-section">
                    <Grid container spacing={2} className='header-grid-container'>
                        <Grid item xs={12} sm={5} md={4} className="aligned-center-container" >
                            <img src={image} alt="" style={{ width: '300px' }} />
                        </Grid>
                        <Grid item xs={12} sm={7} md={8} className="aligned-center-container" >
                            <Typography variant='h5' className='desc-text'>
                                <span style={{color: '#424242'}}>Switches Sockets & Accessories </span>
                                <span style={{color: '#808080'}}> Leaders in cutting edge technology</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>

    )
}
export default Header