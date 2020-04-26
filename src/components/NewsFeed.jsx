import React from "react";
import "./css/news.css";

function News(props) {
  return (
    <div className="newsComponent">
      <div className="newsTitle">{props.title}</div>
      <div className="newsDate">{props.date}</div>
    </div>
  );
}

export default News;
