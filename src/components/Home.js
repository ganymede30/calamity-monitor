import React from "react";
import World_Map from "./World_Map";
import LoadScreen from "./LoadScreen"

const Home = () => {
  return (
    <div>
      <LoadScreen />
      <World_Map />
    </div>
  );
};

export default Home;
