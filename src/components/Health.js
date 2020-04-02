/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Showhide from "./Showhide";
import { Simulation } from "./Simulation";
import "./Health.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { Title } from "../styles/healthStyled";

const virusURL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png";

class Health extends React.Component {
  render() {
    const query = new URLSearchParams(window.location.search);
    return (
      <Parallax className="parallax-main" ref={ref => (this.parallax = ref)} pages={2}>
        <ParallaxLayer className="offset-0" offset={0} speed={1}>
          <Grid className="Grid-container" container justify="center" style={{ margin: "10px" }}>
            <Grid item style={{ margin: "10px" }}>
              <Button onClick={() => this.parallax.scrollTo(1)} variant="contained" color="primary">
                <Typography>Health</Typography>
              </Button>
            </Grid>
            <Grid item style={{ margin: "10px" }}>
              <Button onClick={() => this.parallax.scrollTo(2)} variant="contained" color="primary">
                <Typography>Simulation</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Title>Global Data</Title>
          </Grid>
          <Grid item style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
            <img src=".././coronavirus_graph.png" />
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer className="offset-0.15" offset={0.7} speed={0.8}>
          <img
            src={virusURL}
            style={{
              zIndex: 0,
              display: "block",
              width: "20%",
              marginLeft: "55%",
              position: "absolute"
            }}
          />
          <ParallaxLayer offset={1.3} speed={1.2}>
            <img
              src={virusURL}
              style={{
                display: "block",
                width: "10%",
                marginLeft: "15%",
                position: "absolute"
              }}
            />
            <ParallaxLayer offset={1.7} speed={0.4}>
              <img
                src={virusURL}
                style={{
                  display: "block",
                  width: "16%",
                  marginLeft: "80%",
                  position: "absolute"
                }}
              />
            </ParallaxLayer>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999999} speed={1}>
          <h2 id="mid">Tips and Links</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999999} speed={1}>
          <a href="https://www.cdc.gov/coronavirus" target="_blank">
            <img
              style={{ width: "85px", height: "75px" }}
              src="https://wlflegalpulse.files.wordpress.com/2011/06/cdc_logo3.jpg?w=300&"
            />
          </a>
          <Showhide style={{ width: "85px", height: "75px" }} />
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">
            <img
              style={{ width: "85px", height: "75px" }}
              src="https://i7.pngguru.com/preview/9/416/863/world-health-organization-2014-guinea-ebola-outbreak-united-nations-system-world-health-assembly-others.jpg"
            />
          </a>
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={1}>
          <a id="top" onClick={() => this.parallax.scrollTo(0)}>
            <div>
              <div>^^</div>
              <div>go back to the top</div>
            </div>
          </a>
          <>
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
            <h6>
              <small>Credit: Swizec Teller</small>
            </h6>
          </>
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default Health;
