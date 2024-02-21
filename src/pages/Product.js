import React from 'react'
import { PetList } from '../data/data.js'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
function Product() {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          PetList.map((product) => (
            <Card sx={{ maxWidth: '300px', display: 'flex', m: 0 }}>
              <CardActionArea>
                <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {product.name}
                    <br />
                    {product.price}
                  </Typography>
                  <Typography variant='body2'>{product.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Product



