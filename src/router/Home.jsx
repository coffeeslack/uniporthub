import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";
import "../css/home.css";
import Loader from "../components/Loader";
const PageLeft = lazy(() => import("../components/PageLeft"));
const PageCenter = lazy(() => import("../components/PageCenter"));
const PageRight = lazy(() => import("../components/PageRight"));

function Home(props) {
  const loaderStyle = {
    marginTop: "50px",
  };
  return (
    <div>
      <Navbar page={"home"} />
      <div className="pageWrapper">
        <Suspense
          fallback={
            <div style={loaderStyle}>
              <Loader />
            </div>
          }
        >
          <SlideShow slides={props.slides} />
        </Suspense>
        <div className="row pageGrid">
          <div className="col-lg-3 pageLeft">
            <Suspense
              fallback={
                <div style={loaderStyle}>
                  <Loader />
                </div>
              }
            >
              <PageLeft {...props} />
            </Suspense>
          </div>
          <div className="col-lg-6 pageCenter">
            <Suspense
              fallback={
                <div style={loaderStyle}>
                  <Loader />
                </div>
              }
            >
              <PageCenter />
            </Suspense>
          </div>
          <div className="col-lg-3 pageRight">
            <Suspense
              fallback={
                <div style={loaderStyle}>
                  <Loader />
                </div>
              }
            >
              <PageRight />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
