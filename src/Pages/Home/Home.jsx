import React from "react";
import { Slider } from "../Slider/Slider";
import { Features } from "../Featured/Features";
import { Trending } from "../Trending/Trending";
import { GardenerOfMonth } from "../GardenerOfMonth/GardenerOfMonth";
import { Weekly_Garden_Tips } from "../Weekly_Garden_Tips/Weekly_Garden_Tips";

export const Home = () => {
  return (
    <>
      <Slider />
      <Features />
      <Trending />
      <GardenerOfMonth />
      <Weekly_Garden_Tips />
    </>
  );
};
