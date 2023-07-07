
import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import icon1 from '../../assets/icon-1.jpeg';
import icon2 from '../../assets/icon-2.jpeg';
import icon3 from '../../assets/icon-3.jpeg';
import icon4 from '../../assets/icon-4.jpeg';
import './solutions.styles.css';

const data = [
    {
        imageUrl: icon1,
        heading: 'Acoustic Signalling',
        subHeading: 'Signaling devices mounted with switches for added convenience & style',
        text: 'Products like Speakers for Audio Music, Night Light with Dimming Option, Step ... '
    },
    {
        imageUrl: icon2,
        heading: 'Communication Sockets',
        subHeading: 'Communication sockets for high-speed data transmission',
        text: 'Good quality data sockets are a prerequisite at all workplaces because of increasing ...'
    },
    {
        imageUrl: icon3,
        heading: 'Hospitality Products',
        subHeading: 'Installations that are designed especially for use in the hospitality industry',
        text: 'Architecture of modern hotels and hospitals makes the highest demand for design and ... '
    },
    {
        imageUrl: icon4,
        heading: 'Superior electrical safety',
        subHeading: 'Products engineered to ensure consistent electrical and thermal properties',
        text: 'CUBE Series switches have contacts which provide very high current carrying capacity.'
    }
]

const Solutions = () => {
    return (
        <Box className='common-container'>
            <Grid container spacing={2} className='common-grid-container'>
                <Grid item xs={12}>
                    <Typography variant='h5' style={{ marginBottom: '20px' }} className='primary-heading'>
                        Solutions
                    </Typography>
                </Grid>
                {
                    data.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ maxWidth: 400,margin: 'auto' }} elevation={0}>
                                <CardMedia sx={{ height: 240 }} image={item.imageUrl} title="icons"/>
                                <CardContent style={{padding: '16px 0px'}}>
                                    <Typography gutterBottom variant="h6" component="div" style={{ color: '#424242' }}>
                                        {item.heading}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" className='card-sub-heading'>
                                        {item.subHeading}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: '#6c757d' }}>
                                        {item.text}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{padding: '16px 0px'}}>
                                    <Button size="small" className='card-button'>Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
        </Box>





    )
}
export default Solutions