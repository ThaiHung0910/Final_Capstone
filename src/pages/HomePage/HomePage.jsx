import React from "react";
import Carousel from './Carousel/Carousel'
import Introduction from "./Introduction/Introduction";
import ListCourse from "./ListCourse/ListCourse";
import Number from "./Number/Number";
import Teacher from "./Teacher/Teacher";
import About from "./About/About";



const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <Introduction/>
      <ListCourse/>
      <Number/>
      <Teacher/>
      <About/>
    </div>
  );
};

export default HomePage;
