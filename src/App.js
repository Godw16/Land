import { Button, Container, Grid, Select, TextField } from "@mui/material";
import Navbar from "./Components/Navbar/navbar";
import Paper from "./Components/Paper/paper";
import Forsell from "./Components/Forsell/forsell";
import Propertylisting from "./Components/PropertyListing/propertylisting";
import "../src/Styles/app.scss";
import React from "react";
function App() {
  return (
    <div>
      <Navbar />
      <Container className="container1" maxWidth={"100%"}>
        <Grid container className="gridcontainer">
          <Grid className="grid1" item xs={12} sm={12} md={6} lg={6} xl={6}>
            <h1 className="heading">
              Find A <span className="span">Perfect Home</span> To Live With
              Your Family
            </h1>
            <p className="para">
              Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.Vero
              elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd
              rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            {/* <p className="para">
              Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.Vero
              elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd
              rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            <p className="para">
              Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.Vero
              elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd
              rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            <p className="para">
              Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.Vero
              elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd
              rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p> */}
            <Button className="button" variant="contained">
              Get Started
            </Button>
          </Grid>
          <Grid className="grid2" item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img
              className="image"
              src="https://bespoakjoinery.com/wp-content/uploads/2016/05/home-interiors-1000x1000.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
      <Container className="container2" maxWidth={"100%"}>
        <Container className="container2a" >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField
            className="textfield"
            placeholder="Search Keyword"
            
          />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Select className="select-property"native defaultValue="none">
            <option value="none" disabled>
              Property Type
            </option>
            <option value="1">Property Type 1</option>
            <option value="2">Property Type 2</option>
            <option value="3">Property Type 3</option>
          </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Select className="select-location" native defaultValue="none">
            <option value="none" disabled>
              Location
            </option>
            <option value="1">Location 1</option>
            <option value="2">Location 2</option>
            <option value="3">Location 3</option>
          </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Button  className="button" variant="contained">Search</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
          </Grid>
          
        </Container>
        </Container>
        <Container className="container3" maxWidth={"100%"}>
        <Grid className="grid1" item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1>Property Types</h1>
        </Grid>
          
          <Grid className="grid2" item xs={12} sm={12} md={12} lg={12} xl={12}>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </Grid>
          


        </Container>
        <Container className="container4">
        <Paper/>
        </Container>
     
     <Container className="container5" maxWidth={"100%"}>
        <Grid container className="gridcontainer">
          
          <Grid className="grid1" item xs={12} sm={12} md={6} lg={6} xl={6}>
             
            <img className="image" src="https://tse1.mm.bing.net/th/id/OIP.nKil_wW66furSmSoQg6-2AHaFj?pid=ImgDet&rs=1" alt=""/>
          </Grid>
          <Grid className="grid2" item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h1 className="heading">
          #1 Place To Find The Perfect Property
            </h1>
            <p className="para">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <ul className="items">
              <li className="list">Tempor erat elitr rebum at clita</li>
              <li>Aliqu diam amet diam et eos</li>
              <li>Clita duo justo magna dolore erat amet</li>
            </ul>
            <Button className="button" variant="contained">
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container className="container6" >
        <Propertylisting/>
      </Container>
      <Container className="container7">
        <Forsell/>
      </Container>
    </div>
  );
}
export default App;
