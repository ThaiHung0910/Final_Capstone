import { useMediaQuery } from "react-responsive";

export const ResponsiveLargeScreen = ({ children }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  return isLargeScreen ? children : null;
};

export const ResponsiveMiddleScreen = ({ children }) => {
  const isMiddleScreen = useMediaQuery({ minWidth: 768 });
  return isMiddleScreen ? children : null;
};

export const ResponsiveSmallScreen = ({ children }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  return isSmallScreen ? children : null;
};
