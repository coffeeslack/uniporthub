import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "../components/SplashScreen";
const Home = lazy(() => import("./Home"));

function AppRouter(props) {
  const style = {
    height: "100vh",
  };
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div style={style}>
            <Loader />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact={true}>
            <Home {...props} />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
