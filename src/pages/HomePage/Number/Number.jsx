import React, { useState } from "react";
import CountUp from "react-countup";
import { numbers } from "../../../assets/img/js/img";
import VisibilitySensor from "react-visibility-sensor";

const Number = () => {
  const [countUp, setCountUp] = useState(false);

  let countUpRender = (number) => {
    return (
      <VisibilitySensor
        onChange={onVisibilityChange}
        offset={{
          top: 10,
        }}
        delayedCall
      >
        <CountUp
          start={0}
          end={countUp ? number : 0}
          delay={1}
          suffix=""
          separator=""
          duration={7}
        />
      </VisibilitySensor>
    );
  };

  let renderNumber = () => {
    return numbers.map((item, index) => {
      let { image, number, name } = item;
      return (
        <div
          key={index}
          className="flex flex-col items-center space-y-3 text-white "
        >
          <div>
            <img src={image} width={110} alt="" />
          </div>
          <div className="TextNumber">{countUpRender(number)}</div>
          <p className="text-xl text-uppercase">{name}</p>
        </div>
      );
    });
  };

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountUp({ countUp: true });
    }
  };

  return (
    <div className="Number">
      <div className="container mx-auto lg:px-12">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-11 Content">{renderNumber()}</div>
      </div>
    </div>
  );
};

export default Number;
