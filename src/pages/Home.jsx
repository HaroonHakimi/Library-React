import React from "react";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

function Home() 
{
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
