import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackToTop from '../../components/BackToTop/BackToTop'

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
