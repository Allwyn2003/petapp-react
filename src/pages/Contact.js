import React from 'react'
import Layout from '../components/Layout/Layout'
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import './contact.css';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function Contact() {
  return (
    <Layout>
      <div className='contact'>
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant='h4'>
            Contact Us
          </Typography>
          <p>
            You can contact us through various ways like Mail,Instagram,WhatsApp.
            You can check on our for your need.From product for pets to service for pets.
            For more Details you can contact us via Mail or WhatsApp.
          </p>
        </Box>
        <Box sx={{
          m: 3, width: "600px", ml: 15, "@media (max-width:600px)": {
            width: "250px",
          }
        }}>
          <TableContainer component={Paper}>
            <Table aria-aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: 'lightgreen', color: 'black', }} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <ContactPhoneIcon sx={{ color: 'lightgreen', pt: 1 }} /> 1800-00-0000 (Tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: 'lightgreen', pt: 1 }} /> 717821p107@kce.ac.in
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <InstagramIcon sx={{ color: 'lightgreen', pt: 1 }} /> Wekceian
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: 'lightgreen', pt: 1 }} /> 7010883766
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </Layout>
  )
}
