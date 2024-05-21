import React from "react";
import Banner from './Banner/Banner'
import Introduction from "./Introduction/Introduction";
import ListCourse from "./ListCourse/ListCourse";
import Number from "./Number/Number";
import Teacher from "./Teacher/Teacher";
import About from "./About/About";


const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Introduction/>
      <ListCourse/>
      <Number/>
      <Teacher/>
      <About/>
    </div>
  );
};

export default HomePage;
