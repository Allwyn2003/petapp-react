import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import about from '../components/images/about.jpg'
import "../styles/About.css";
import "./about.css";
const About = () => {
  return (
    <Layout>
      <div className='about'>
        <Box
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: 'bold',
              my: 2,
              fontSize: '2rem',
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:500px)": {
              mt: 0,
              "& h4 ": {
                fontSize: '1.5rem',
              }
            }
          }}
        >
          <div >
            <img style={{ borderRadius: "10%", }} src={about}></img>
            <Typography variant='h4'>
              Welcome To My Pet Shop
            </Typography>
            <p>

              You can shop from the comfort of your own home, without the need to travel to a physical store.
              This is particularly beneficial for pet owners who have busy schedules or limited mobility.
              Moreover, online pet shops are accessible from anywhere, anytime, and on any device with internet access.
            </p>
            <p>
              Pet animals are defined as animals that are kept for a person's company or for entertainment at home.
              Pet animals are companions to humans and they are very loyal to their owners.
              Pet animals are a true example of Teaching us about unconditional love, they also give us instant happiness.
            </p>
            <p>
              The convenience of buying pets online is particularly appealing to people who are busy with work and family commitments, can't always travel long distances to visit a pet store, and/or haveallergies to pet hair or dander.
              However, there are certain risks to consider when ordering a pet online. For example, it can be difficult to assess the temperament of an animal without seeing it in person
            </p>
          </div>
        </Box>
      </div>
    </Layout>

  );

};

export default About;
