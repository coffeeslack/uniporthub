import React from "react";
import slide1 from "../images/slide3.jpg";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import "./css/feed.css";

function Blog() {
  return (
    <div className="blogFeed">
      <div className="blogFeedHead row">
        <div className="blogFeedImg col-lg-5">
          <img src={slide1} alt={slide1.name} />
        </div>
        <div className="blogFeedTitle col-lg-6">
          Best practices to help students remember all they've read
        </div>
      </div>
      <div className="blogFeedFooter">
        <div className="blogFeedUserProfile">
          <div className="blogFeedUserImg">
            <img src={slide1} alt={slide1.name} />
          </div>
          <div className="blogFeedUser">
            <div className="blogFeedUserName">coffeslack</div>
            <div className="blogFeedTime">5 hours ago</div>
          </div>
        </div>
        <div className="blogFeedReviews">
          <div>
            <AiOutlineEye />
            <span>15.5k</span>
          </div>
          <div>
            <FaRegHeart />
            <span>1.5k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
