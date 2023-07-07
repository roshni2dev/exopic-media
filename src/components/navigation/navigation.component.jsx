
// import React, { Fragment } from 'react'
// import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import logo from '../../assets/logo.png';


// const Navigation = () => {
//     return (
//         // <Box style={{ position: 'fixed', background: '#fff', padding: '20px' }}>
//             <Grid container className='common-grid-container'>
//                 <Grid item xs={8}>
//                     <Box style={{ display: 'flex', alignItems: 'center' }}>
//                         <Typography>Home</Typography>
//                         <Typography>Company</Typography>
//                         <Typography>Projects</Typography>
//                         <Typography>Catalogues</Typography>
//                         <Typography>Contacts</Typography>
//                     </Box>
//                 </Grid>
//             </Grid>
//         // </Box>
//     )
// }
// export default Navigation
import React from 'react'
import { Box, Grid, Slide, Typography } from '@mui/material'
import './navigation.styles.css';
import logo from '../../assets/logo.png'
import { Menu } from '@mui/icons-material';

const Navigation = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box style={{ position: 'fixed', width: '-webkit-fill-available', zIndex: '10000' }}>
            <Box className="navbar">
                <Grid container >
                    <Grid item xs={6} sm={8}>
                        <Menu className='menu-icon' onClick={handleChange} />
                        <Box className='aligned-start-container'>
                            <Typography variant='subtitle1' className='navigation-items' style={{ marginRight: '20px' }} >Home</Typography>
                            <Typography variant='subtitle1' className='navigation-items' style={{ marginRight: '20px', }} >Company</Typography>
                            <Typography variant='subtitle1' className='navigation-items' style={{ marginRight: '20px', }} >Products</Typography>
                            <Typography variant='subtitle1' className='navigation-items' style={{ marginRight: '20px', }} >Catalogues</Typography>
                            <Typography variant='subtitle1' className='navigation-items' style={{}} >Contacts</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} className='aligned-end-container'>
                        <img src={logo} alt='logo' className='logo-image' />
                    </Grid>
                </Grid>
                <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                    <Box className="navigation-items-container">
                        <Typography variant='subtitle1' className='navigation-items' style={{ marginBottom: '20px' }} >Home</Typography>
                        <Typography variant='subtitle1' className='navigation-items' style={{ marginBottom: '20px', }} >Company</Typography>
                        <Typography variant='subtitle1' className='navigation-items' style={{ marginBottom: '20px', }} >Products</Typography>
                        <Typography variant='subtitle1' className='navigation-items' style={{ marginBottom: '20px', }} >Catalogues</Typography>
                        <Typography variant='subtitle1' className='navigation-items' style={{}} >Contacts</Typography>
                    </Box>
                </Slide>
            </Box>
        </Box>
    )
}
export default Navigation