import React from "react";
import notFound from "../../assets/json/notFound.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center" style={{ width: "600px" }}>
        <Lottie animationData={notFound} />
        <button
          onClick={() => {
            navigate("/");
          }}
          className="BtnGlobal btnLink_404 w-1/2"
        >
          Quay về trang chủ
        </button>
      </div>
    </div>
  );
};

export default Page404;
