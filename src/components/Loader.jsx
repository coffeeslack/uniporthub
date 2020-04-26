import React from "react";
import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="loaderContainer">
      <ReactLoading
        type="spin"
        color="#3487ef"
        height={30}
        width={30}
        className="reactLoader"
      />
    </div>
  );
}

export default Loader;
