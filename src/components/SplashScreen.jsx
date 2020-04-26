import React from "react";
import logo from "../images/logo.svg";

function Loader() {
  return (
    <div className="loaderContainer">
      <img src={logo} alt={logo.name} className="splashScreenIcon" />
    </div>
  );
}

export default Loader;
