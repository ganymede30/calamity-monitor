/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Showhide from "./Showhide";
import { Simulation } from "./Simulation";
import "./Health.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { Title, Text } from "../styles/healthStyled";
import Chart from "./Chart";

const virusURL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png";

class Health extends React.Component {
  render() {
    const query = new URLSearchParams(window.location.search);
    return (
      <Parallax
        style={{ height: "calc(100vh - 55px)" }}
        className="parallax-main"
        ref={ref => (this.parallax = ref)}
        pages={1}>
        <ParallaxLayer className="offset-0" offset={0} speed={1}>
          <Grid
            className="Grid-container"
            container
            justify="center"
            style={{ margin: "10px", height: "auto" }}>
            <Grid item style={{ margin: "10px" }}>
              <Button
                onClick={() => this.parallax.scrollTo(0.3)}
                variant="contained"
                color="primary">
                <Typography>Useful Links</Typography>
              </Button>
            </Grid>
            <Grid item style={{ margin: "10px" }}>
              <Button
                onClick={() => this.parallax.scrollTo(0.5)}
                variant="contained"
                color="primary">
                <Typography>Simulation</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <Title>Total Worldwide Infections</Title>
            <Chart />
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          className="offset-0.15"
          offset={0}
          style={{ zIndex: "-1", height: "auto" }}
          speed={0.8}>
          <img
            src={virusURL}
            style={{
              display: "block",
              width: "20%",
              marginLeft: "85%",
              position: "absolute"
            }}
          />
          <ParallaxLayer offset={0.8} speed={1.2}>
            <img
              src={virusURL}
              style={{
                height: "auto",
                display: "block",
                width: "10%",
                marginLeft: "15%",
                position: "absolute"
              }}
            />
            <ParallaxLayer offset={1} speed={0.4}>
              <img
                src={virusURL}
                style={{
                  height: "auto",
                  display: "block",
                  width: "16%",
                  marginLeft: "73%",
                  position: "absolute"
                }}
              />
            </ParallaxLayer>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={1}>
          <Title id="mid">Useful Links</Title>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1}>
          <Showhide style={{ width: "150px", height: "100px" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.999999999} speed={1}>
          <Button
            size="small"
            style={{ textAlign: "left" }}
            onClick={() => this.parallax.scrollTo(0)}
            variant="contained"
            color="default">
            <Typography>To Top!</Typography>
          </Button>
          <div id="sim">
            <Title>Social distancing simulation</Title>
            <Text>
              <Simulation
                cx={400}
                cy={200}
                width={400}
                height={300}
                defaultMortality={query.get("mortality") || 4}
                defaultVirality={query.get("virality") || 50}
                defaultLengthOfInfection={query.get("lengthOfInfection") || 40}
                defaultSocialDistancing={query.get("socialDistancing") || 0}
                defaultReinfectability={query.get("reinfectability") || 30}
              />
            </Text>
            <h6>
              <small>Credit: Swizec Teller</small>
            </h6>
          </div>
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default Health;
