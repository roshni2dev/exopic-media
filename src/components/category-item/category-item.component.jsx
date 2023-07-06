import React, { Fragment } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import image1 from '../../assets/11.jpg';
import image2 from '../../assets/13.jpg';
import image3 from '../../assets/5.jpg';
import './category-item.styles.css';

const data = [
    {
        heading: 'CUBE Series',
        subHeading: 'modern switches, sockets and accessories for residential and commercial buildings',
        text: 'CUBE Series is a modular product range which is designed to satisfy the requirements of electrical installations in modern buildings. The range includes switches, sockets, fan regulators & dimmers, hospitality products, communication sockets, acoustic and optical signaling products, cover plates etc.',
        imageUrl: image1
    },
    {
        heading: 'SQUARE Series',
        subHeading: ' a classic switch range with screw mounting system that is everlasting',
        text: ' SQUARE Series products is a design which has evolved over a period of time. Functional qualities and the mounting system is proven and the technology tested. Classic looks of this range makes it a timeless design. Unique feature of this Series is the mounting system.',
        imageUrl: image2

    }
]

const CategoryItem = () => {
    return (
        <Fragment>
        {/* <Grid container spacing={2} style={{ maxWidth: '1200px', margin: 'auto',width: 'auto', background: '#ffffff', padding: '40px 46px 20px 30px' }}>
            {
                data.map((item) => (
                    <Grid item xs={12} sm={6}>
                        <img src={item.imageUrl} style={{ width: '100%', borderRadius: '10px' }}  alt=''/>
                        <Box style={{ marginTop: '20px',height: '260px' }}>
                            <Typography variant='h5' className='category-item-main-heading'>{item.heading}</Typography>
                            <Typography variant='h6' className='category-item-sub-heading'>
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
        </Grid> */}
        <Box className='common-container' style={{ background: '#f6f6f6'}}>
        <Grid container spacing={2} className='common-grid-container'>
            <Grid item xs={12} sm={6}>
                <img src={image3} style={{ width: '100%', borderRadius: '10px' }} alt='' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant='subtitle1' className='category-item-text'>All products from Norisys have been developed to establish new standards in electrical accessories. Commitment to superior designs, elaborate attention to engineering details, modern manufacturing facilities and stringent quality measures have combined together to create a new concept in safety, reliability, flexibility and modernity. All Norisys products are designed for extreme endurance. Materials are chosen to withstand arduous conditions. Local wiring practices are carefully studied before the design of any new product at Norisys. This ensures ease of installation and durability of the products</Typography>
                <Button className='learn-more-button'>
                    Learn More
                </Button>
            </Grid>
        </Grid>
    </Box>
    </Fragment>

    )
}
export default CategoryItem