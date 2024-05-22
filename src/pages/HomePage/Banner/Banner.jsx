import React from "react";
import carousel from "../../../assets/json/carousel.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:grid lg:grid-cols-2 lg:p-12 flex  flex-col-reverse items-center">
        <div className="text-5xl mr-12 font-semibold">
          <div className="space-y-3">
            <h1>Chào mừng</h1>
            <h1>đến với môi trường </h1>
            <h1 className="text-blue-400 text-6xl AnimationText">
              E<span className="ml-1 text-5xl">learning</span>
            </h1>
          </div>
        </div>
        <div><Lottie animationData={carousel} /></div>
      </div>
    </div>
  );
};

export default Banner;
