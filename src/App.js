import React from "react";
import "./css/app.css";
import "./css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import slide4 from "./images/slide4.jpg";
import slide5 from "./images/slide5.jpg";
import slide6 from "./images/slide6.jpg";

class App extends React.Component {
  state = {
    slides: [
      { image: slide1 },
      { image: slide2 },
      { image: slide3 },
      { image: slide4 },
      { image: slide5 },
      { image: slide6 },
    ],
    news: [
      { title: "ASUU calls off strike!", date: "today, 9am" },
      {
        title: "Online course registration ends on friday by 12 noon",
        date: "today, 8am",
      },
    ],
  };

  render() {
    return <AppRouter {...this.state} />;
  }
}

export default App;
