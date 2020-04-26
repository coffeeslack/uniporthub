import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
// import { LoremIpsum } from "react-lorem-ipsum";
import "./css/post.css";
import slide1 from "../images/slide3.jpg";

function Post() {
  return (
    <div className="hubPost">
      <div className="postHeader">
        <div className="postProfile">
          <div className="postProfileImg">
            <img src={slide1} alt={slide1.name} />
          </div>
          <div className="postProfileUser">
            <div className="postProfileDisplayName">coffeeslack</div>
            <div className="postProfileName">@shadrackibiso</div>
          </div>
        </div>
        <div className="postMenu">
          <MdMoreHoriz />
        </div>
      </div>
      <div className="postContent">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus et hac
        class taciti dictum torquent ut laoreet. Vivamus ullamcorper nostra
        nullam venenatis ullamcorper dis. Purus per lorem montes ex mollis
        turpis diam mattis.
      </div>
      <div className="postFooter">
        <div className="postTime">Today, 9AM</div>
        <div className="postReviews">
          <div>
            <FaRegComment />
            <span>4.5k</span>
          </div>
          <div>
            <FaRegHeart />
            <span>1.2k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
