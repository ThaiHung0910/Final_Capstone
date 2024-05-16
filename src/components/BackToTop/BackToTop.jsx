import React, { useState, useEffect } from "react";

export default function ButtonToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="TopToBm">
      {" "}
      {showTopBtn && (
        <button
          className="IconCustom"
          onClick={goToTop}
        >
          
          <i className="fas fa-arrow-up"></i>
        </button>
      )}{" "}
    </div>
  );
}
