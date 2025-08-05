import React from "react";
import Carousel from "../components/Carousel";
import Kollywood from "../components/Kollywood";
import Mollywood from "../components/Mollywood";
import Hollywood from "../components/Hollywood";
import Anime from "../components/Anime";
import Webseries from "../components/Webseries";

const Home = () => {
  return (
    <main>
      <Carousel />
      <Kollywood />
      <Mollywood />
      <Hollywood />
      <Anime />
      <Webseries />
    </main>
  );
};

export default Home;
