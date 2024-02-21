import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material'
const Footer = () => {
    return (
        <>
            <Box
                sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 1 }}
            >
                <Box sx={{
                    my: 1, "& svg": {
                        fontSize: "30px",
                        cursor: 'pointer',
                        mr: 2,
                    },
                    "& svg:hover": {
                        color: 'Lightgreen',
                        transform: 'translateX(5px)',
                        transition: 'all 400ms',
                    },
                }}
                >
                    {/* icons */}
                    <InstagramIcon />
                    <WhatsAppIcon />
                    <TwitterIcon />
                    <YouTubeIcon />

                </Box>
                <Typography
                    variant='h5'
                    sx={{
                        "@media (max-width:600px)": {
                            fontSize: "1rem",
                        },
                    }}
                >
                    All Rights Reserved &copy; Pet Shop
                </Typography>
            </Box>
        </>
    );
};

export default Footer