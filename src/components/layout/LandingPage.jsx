import React, { ImageBackground } from "react";
import styled from "styled-components";
import bg from "../../assets/cool-background.png";
import logo from "../../assets/waitless-logo.png";
import "./LandingPage.scss";
import { Typography, Grid, Button } from "@material-ui/core";

const LandingPage = () => {
  //   return <Content/>;
  return (
    <div>
      <header className="header">
        <div className="logo-box">
          {/* <img src={logo} alt="logo" className="logo"></img> */}
        </div>

        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ minHeight: "80vh" }}
        >
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h1"
              fontWeight={1000}
              className="heading-primary"
            >
              <span className="heading-primary-main">waitless</span>
            </Typography>

            <Typography variant="h4" className="heading-primary">
              <span className="heading-primary-sub">subtiltes</span>
            </Typography>

            <Button
              className="button button-main"
              style={{
                color: "grey",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                width: "10%",
                margin: "20px",
                borderRadius: "30px"
              }}
            >
              get started
            </Button>
          </Grid>
        </Grid>
      </header>

      <div>
        <div className="section-about">
          <Grid container justify="center">
            <Typography
              style={{ color: "#27ae60", paddingBottom: "40px" }}
              variant="h3"
              fontWeight={500}
            >
              stop waiting start improving
            </Typography>
          </Grid>

          <Grid container style={{padding: "70px"}}>
            <Grid item xs={6}>
              <Typography variant="h4" style={{marginBottom: "1.5rem"}}>how waitless works</Typography>
              <Typography style={{marginBottom: "1.5rem", fontSize: "27px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                Lorem Ipsum.
              </Typography>

              <Typography variant="h4" style={{marginBottom: "1.5rem"}}>other stuff</Typography>
              <Typography style={{marginBottom: "1.5rem", fontSize: "27px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                Lorem Ipsum.
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>other</Typography>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="footer">

      </div>
    </div>
    
  );
};

export default LandingPage;
