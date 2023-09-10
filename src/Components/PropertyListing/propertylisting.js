import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import '../../Styles/propertylisting.scss'

const propertylisting = () => {
  return (
    <Container maxWidth={'100%'} className='container' >
<Grid container className="gridcontainer">
          
          <Grid className="grid1" item xs={12} sm={12} md={6} lg={6} xl={6}>
             
          <h1 className="heading">
          Property Listing
            </h1>
            <p className="para">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
            </p>
          </Grid>
          <Grid className="grid2" item xs={12} sm={12} md={6} lg={6} xl={6}>
          
            <Button className="button"  variant='outlined'>
            Featured
            </Button>
            <Button className="button1"  variant='outlined'>
            For Sell
            </Button>
            <Button className="button2"  variant='outlined'>
            For Rent
            </Button>
          </Grid>
        </Grid>
    </Container>
  )
}

export default propertylisting