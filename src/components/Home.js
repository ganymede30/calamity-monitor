import React from "react";
import WorldMap from "./Maps/WorldMap";
import LoadScreen from "./Maps/LoadScreen";
import Chart from './Chart'

const Home = () => {
  return (
    <>
      <LoadScreen />
      <WorldMap />
    
      <Chart />
    </>
  );
};

export default Home;
