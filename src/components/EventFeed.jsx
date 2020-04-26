import React from "react";
import slide1 from "../images/slide6.jpg";
import "./css/feed.css";

function Event() {
  return (
    <div className="blogFeed">
      <div className="blogFeedHead row">
        <div className="blogFeedImg col-lg-5">
          <img src={slide1} alt={slide1.name} />
        </div>
        <div className="blogFeedTitle col-lg-6">
          <div className="eventFeedTitle">Matriculation</div>
          <div className="eventFeedVenue">
            Convocation arena, OFRIMA round-about
          </div>
        </div>
      </div>
      <div className="blogFeedFooter">
        <div className="EventFeedDate">Mon 23 Apr</div>
        <div className="EventFeedTime">10:00am</div>
      </div>
    </div>
  );
}

export default Event;
