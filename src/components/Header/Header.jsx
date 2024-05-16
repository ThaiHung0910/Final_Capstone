import React from "react";
import HeaderDesktopTablet from "./HeaderDeskTopTablet/HeaderDesktopTablet";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import {
  ResponsiveMiddleScreen,
  ResponsiveSmallScreen,
} from "../../HOC/responsive";

export default function Header() {
  return (
    <>
      <ResponsiveMiddleScreen>
        <HeaderDesktopTablet />
      </ResponsiveMiddleScreen>
      <ResponsiveSmallScreen>
        <HeaderMobile />
      </ResponsiveSmallScreen>
    </>
  );
}
