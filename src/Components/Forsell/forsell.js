import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import '../../Styles/forsell.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
const forsell = () => {
  return (
    <Container className='container' >
      <Grid className='gridcontainer' spacing={2} container>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className='card'>
            {/* <CardMedia className='image' image='https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0'/> */}
            <img className='image' src=' https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0' alt=''/>
            <CardContent>
              <Typography className='top-left'>
                For Sell
              </Typography>
              <Typography className='price'>
              $12,345
              </Typography>
              <Typography className='name'>
              Golden Urban House For Sell
              </Typography>
              <Typography className='location'>

              <LocationOnIcon className='icon'/> 123 Street, New York, USA
              </Typography>
              <Typography className='details'>
                <span> <SquareFootIcon/> 1000 Sqft</span>
                <span><BedIcon/> 3 Bed</span>
                <span><BathtubIcon/> 2 Bath</span>
              </Typography>
            </CardContent>
            
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className='card'>
            {/* <CardMedia className='image' image='https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0'/> */}
            <img className='image' src=' https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0' alt=''/>
            <CardContent>
              <Typography>
              $12,345
              </Typography>
              <Typography>
              Golden Urban House For Sell
              </Typography>
              <Typography>
              123 Street, New York, USA
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className='card'>
            {/* <CardMedia className='image' image='https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0'/> */}
            <img className='image' src=' https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0' alt=''/>
            <CardContent>
              <Typography>
              $12,345
              </Typography>
              <Typography>
              Golden Urban House For Sell
              </Typography>
              <Typography>
              123 Street, New York, USA
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className='card'>
            {/* <CardMedia className='image' image='https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0'/> */}
            <img className='image' src=' https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0' alt=''/>
            <CardContent>
              <Typography>
              $12,345
              </Typography>
              <Typography>
              Golden Urban House For Sell
              </Typography>
              <Typography>
              123 Street, New York, USA
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className='card'>
            {/* <CardMedia className='image' image='https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0'/> */}
            <img className='image' src=' https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0' alt=''/>
            <CardContent>
              <Typography>
              $12,345
              </Typography>
              <Typography>
              Golden Urban House For Sell
              </Typography>
              <Typography>
              123 Street, New York, USA
              </Typography>
            </CardContent>
          </Card>
        </Grid><Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className='card'>
            {/* <CardMedia className='image' image='https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0'/> */}
            <img className='image' src=' https://th.bing.com/th/id/R.85e28c38f7c3f1a678d3ed4fa5590a25?rik=DBlRnHY8fOWTWQ&riu=http%3a%2f%2frlmillerphoto.com%2fwp-content%2fuploads%2f2017%2f05%2fcoeur-dalene-luxury-real-estate-photography-twilght2.jpg&ehk=NViZaMSBsAkW1sA4fN2sJNBzMufKB5fIjLxctdBXU1A%3d&risl=&pid=ImgRaw&r=0' alt=''/>
            <CardContent>
              <Typography>
              $12,345
              </Typography>
              <Typography>
              Golden Urban House For Sell
              </Typography>
              <Typography>
              123 Street, New York, USA
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>
  )
}

export default forsell