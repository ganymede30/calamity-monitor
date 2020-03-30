import React from "react";
import WorldMap from "./WorldMap";
import LoadScreen from "./LoadScreen";
import LineGraph from "./Maps/LineGraph"

const Home = () => {
  return (
    <>
      <LoadScreen />
      <LineGraph />
      <WorldMap />
    </>
  );
};

export default Home;
