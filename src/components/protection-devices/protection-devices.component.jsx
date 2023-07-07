import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import image1 from '../../assets/protection-1.png';
import image2 from '../../assets/protection-2.png';
import './protection-devices.styles.css';

const data = [
    {
        heading: 'Modular MCBs',
        subHeading: 'Tiny MCBs are modular MCBs which can be mounted simply like a switch',
        text: 'Tiny MCB is a unique product which was first introduced by Norisys, and which has now become a common householdproduct. It is a modular MCB which can be mounted like a switch.These MCBs are front mounted along with switches, sockets, etc. of CUBE Series or SQUARE Series products. ',
        imageUrl: image1
    },
    {
        heading: 'Single Phase Motor Starter',
        subHeading: ' Ideal device for protecting air-conditioners, washing machines, etc. from dangerous overloads.',
        text: ' Single Phase Motor Starter is a device for switching and protection of appliances such as room air-conditioners, refrigerators, washing machines, computers, water coolers, pumps, etc. up to 25 Amperes. In case of any overload, the Single Phase Motor Starter trips, thereby protecting the appliance from any burn-out.',
        imageUrl: image2

    }
]

const ProtectionDevices = () => {
    return (
        <Box className='common-container'>
            <Grid container spacing={2} className='common-grid-container'>
                <Grid item xs={12}>
                    <Typography variant='h5' style={{ marginBottom: '20px' }} className='primary-heading'>
                        Protection Devices
                    </Typography>
                </Grid>
                {
                    data.map((item) => (
                        <Grid item xs={12} sm={6}>
                            <img src={item.imageUrl} style={{ width: '100%', borderRadius: '10px' }} alt='' />
                            <Box style={{ marginTop: '20px' }}>
                                <Typography variant='h5' className='category-item-main-heading' component="div" >{item.heading}</Typography>
                                <Typography variant='h6' className='protection-devices-sub-heading'>
                                    {item.subHeading}
                                </Typography>
                                <Typography variant='subtitle1' className='category-item-text'>
                                    {item.text}
                                </Typography>
                            </Box>
                            <Button className='learn-more-button'>
                                Learn More
                            </Button>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>

    )
}
export default ProtectionDevices