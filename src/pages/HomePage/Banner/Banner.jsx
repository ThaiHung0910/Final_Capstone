import React from "react";
import carousel from "../../../assets/json/carousel.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:grid lg:grid-cols-2 lg:px-12 py-12 px-3 flex  flex-col-reverse items-center">
        <div className=" sm:text-5xl  text-3xl mr-12 font-semibold">
          <div className="space-y-3">
            <h1>Chào mừng</h1>
            <h1>đến với môi trường </h1>
            <h1 className="text-blue-400 sm:text-6xl  text-3xl AnimationText">
              E<span className="ml-1 sm:text-5xl text-3xl">learning</span>
            </h1>
          </div>
        </div>
        <div><Lottie animationData={carousel} /></div>
      </div>
    </div>
  );
};

export default Banner;
