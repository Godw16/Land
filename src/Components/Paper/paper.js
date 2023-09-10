import { Card, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "../../Styles/paper.scss";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GarageIcon from "@mui/icons-material/Garage";
import VillaIcon from "@mui/icons-material/Villa";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import StorefrontIcon from "@mui/icons-material/Storefront";
const paper = () => {
  return (
    <Container maxWidth={"100%"} className="container">
      <Grid className="grid" container spacing={2}>
        <Grid className="grid-item" item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Paper className="paper" variant="outlined">
            <Card className="card">
              <Typography>
                <ApartmentIcon className="icon" />
              </Typography>
              <Typography>Apartment</Typography>
              <Typography>123 Properties</Typography>
            </Card>
          </Paper>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Paper className="paper" variant="outlined">
            <Card className="card">
              <Typography>
                <VillaIcon className="icon" />
              </Typography>
              <Typography>Villa</Typography>
              <Typography>123 Properties</Typography>
            </Card>
          </Paper>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Paper className="paper" variant="outlined">
            <Card className="card">
              <Typography>
                <HomeIcon className="icon" />
              </Typography>
              <Typography>Home</Typography>
              <Typography>123 Properties</Typography>
            </Card>
          </Paper>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Paper className="paper" variant="outlined">
            <Card className="card">
              <Typography>
                <BusinessIcon className="icon" />
              </Typography>
              <Typography>Office</Typography>
              <Typography>123 Properties</Typography>
            </Card>
          </Paper>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Paper className="paper" variant="outlined">
            <Card className="card">
              <Typography>
                <LocationCityIcon className="icon" />
              </Typography>
              <Typography>Building</Typography>
              <Typography>123 Properties</Typography>
            </Card>
          </Paper>
        </Grid>

        <Grid className="grid-item" item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Paper className="paper" variant="outlined">
            <Card className="card">
              <Typography>
                <OtherHousesIcon className="icon" />
              </Typography>
              <Typography>Townhouse</Typography>
              <Typography>123 Properties</Typography>
            </Card>
          </Paper>
        </Grid>

        <Grid className="grid-item" item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Paper className="paper" variant="outlined">
            <Card className="card">
              <Typography>
                <StorefrontIcon className="icon" />
              </Typography>
              <Typography>Shop</Typography>
              <Typography>123 Properties</Typography>
            </Card>
          </Paper>
        </Grid>

        <Grid className="grid-item" item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Paper className="paper" variant="outlined">
            <Card className="card">
              <Typography>
                <GarageIcon className="icon" />
              </Typography>
              <Typography>Garage</Typography>
              <Typography>123 Properties</Typography>
            </Card>
          </Paper>
        </Grid>
      </Grid>

    
    </Container>
  );
};

export default paper;
