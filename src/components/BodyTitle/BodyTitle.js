import React from "react";
import "./BodyTitle.scss";
import { BiPlay } from "react-icons/bi";

export const BodyTitle = () => {
  return (
    <div>
      <div className="body-title-container">
        <h1 className="body-title">CREATIVE AGENCY</h1>
        <div className="javelin-ca-demo-button-container">
          <a
            href="https://www.youtube.com/watch?v=wQX8_nwylTY"
            rel="noreferrer"
            target="_blank"
            className="play-button"
          >
            <BiPlay className="play-icon" />
          </a>
          <p className="play-content">Watch a video intro</p>
        </div>
      </div>
      <div className="title-image-container">
        <img
          className="title-image"
          src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Group-10-copy-3.png"
          alt="/"
        />
      </div>
    </div>
  );
};
