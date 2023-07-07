
import React, { Fragment } from 'react'
import { Box, Button, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';
import './footer.styles.css';
import { ArrowForwardIos, Facebook, Google, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const company_data = ['Company Philosophy', 'Research & Development', 'History', 'Technology', 'Career']
const products_data = ['Switches', 'Sockets', 'Fan Regulators & Dimmers', 'Communique & support', 'Acoustic & Optical Signal', 'Hospitality Modules', 'Single Phase Motor Starters', 'Cover Plates', 'Modular MCBs', 'Wiring Boxes']
const features_data = ['Thermoset Material Advantage', 'Bi-material Frames', 'Designer Plates', 'Sustainability', 'Electrical Safety']

const social_icon_data = [
    {
        imageUrl: Twitter
    },
    {
        imageUrl: Facebook
    },
    {
        imageUrl: Instagram
    },
    {
        imageUrl: Google
    },
    {
        imageUrl: LinkedIn
    }

]
const Footer = () => {
    return (
        <Box className='footer'>
            <Grid container className='common-grid-container'>
                <Grid item xs={6} sm={3} md={3}>
                    <Typography variant='subtitle1' className='footer-heading'>Company</Typography>
                    <MenuList >
                        {
                            company_data.map((item) => (
                                <MenuItem className='footer-menu-item'>
                                    <ListItemIcon className='footer-list-item-icon-container' >
                                        <ArrowForwardIos className='footer-list-item-icon' />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='subtitle2' className='footer-list-item-text' >{item}</Typography></ListItemText>
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Typography variant='subtitle1' className='footer-heading'>Products</Typography>
                    <Typography variant='subtitle2' className='footer-sub-heading'>CUBE Series</Typography>
                    <MenuList>
                        {
                            products_data.map((item) => (
                                <MenuItem className='footer-menu-item'>
                                    <ListItemIcon className='footer-list-item-icon-container' >
                                        <ArrowForwardIos className='footer-list-item-icon' />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='subtitle2' className='footer-list-item-text' >{item}</Typography></ListItemText>
                                </MenuItem>
                            ))
                        }

                    </MenuList>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Typography variant='subtitle1' className='footer-heading'>&nbsp;</Typography>
                    <Typography variant='subtitle2' className='footer-sub-heading'>SQUARE Series</Typography>
                    <MenuList>
                        {
                            products_data.map((item) => (
                                <MenuItem className='footer-menu-item'>
                                    <ListItemIcon className='footer-list-item-icon-container' >
                                        <ArrowForwardIos className='footer-list-item-icon' />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='subtitle2' className='footer-list-item-text' >{item}</Typography></ListItemText>
                                </MenuItem>
                            ))
                        }

                    </MenuList>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Typography variant='subtitle1' className='footer-heading'>Features</Typography>
                    <MenuList>
                        {
                            features_data.map((item) => (
                                <MenuItem className='footer-menu-item'>
                                    <ListItemIcon className='footer-list-item-icon-container' >
                                        <ArrowForwardIos className='footer-list-item-icon' />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='subtitle2' className='footer-list-item-text' >{item}</Typography></ListItemText>
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                    <Typography variant='subtitle2' className='footer-heading' style={{ padding: '12px 0px 0px 0px' }}>Contact</Typography>
                    <Typography variant='subtitle2' className='footer-heading' style={{ padding: '12px 0px 0px 0px' }}>Catalogues</Typography>
                    <Typography variant='subtitle2' className='footer-heading' style={{ padding: '12px 0px 0px 0px' }}>Blog</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant='subtitle1' style={{ color: '#d5d5d5', fontWeight: '600', marginBottom: '20px' }}>Norisys</Typography>
                    <Typography variant='subtitle1' style={{ color: '#d5d5d5',fontSize: '12px' }}>
                        Norisys manufactures electrical switchgear accessories that are best suited for residential and commercial applications. Each day Norisys engineers work to bring about a combination of innovative designs and materials using advanced manufacturing technology in order to create products that meet user requirements. Norisys constructs innovative switchgear systems at the highest level and has established itself by many years of experience and high quality workmanship.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant='subtitle1' style={{ color: '#d5d5d5', fontWeight: '600', marginBottom: '20px' }}>&nbsp;</Typography>
                    <Box className='social-icon-container'>
                        {
                            social_icon_data.map(item => (
                                <Button className='social-icon-button'>
                                    <item.imageUrl className='social-icon' />
                                </Button>
                            ))
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Footer