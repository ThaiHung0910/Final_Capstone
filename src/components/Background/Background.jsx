import React from "react";
import { Breadcrumb } from "antd";


const Background = ({ path }) => {
  return (
    <div className="Background">
      <div className="Overlay"></div>
      <div className="container mx-auto text-lg lg:px-12 px-3 space-y-3 Content text-white">
        <div>
          <Breadcrumb
            items={[
              {
                href: "/",
                title: (
                  <i className="fa-solid fa-house text-white"></i>
                ),
              },
              ...path
            ]}
            />
        </div>
        <h1 className="text-3xl">Elearning</h1>
        <p>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</p>
      </div>
    </div>
  );
};

export default Background;
