import React, { useState } from "react";
import { ServicesListData } from "../../Constants/ServicesListData";
import "./ProjectsList.scss";
import {AiOutlineFullscreen} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import { Carousel } from "react-bootstrap";

export const ProjectsList = () => {
  const [overlay, setOverlay] = useState(false);

  const OverLay = () => {
    setOverlay(true);
  };
  const NoOverlay = () => {
    setOverlay(false);
  };
  return (
    <div className="projects-list-container">
      {ServicesListData.map((each) => (
        <div className="each-category-list-item" key={each.id}>
          <div className="image-container">
            <img
              src={each.image}
              alt="/"
              className="categories-image-list-item"
            />
          </div>
          <div className="category-list-item">
            <div className="category-list-item-content">
              <h2 className="category-list-item-name">{each.title}</h2>
              <p className="category-list-item-name">{each.category}</p>
            </div>
            <AiOutlineFullscreen className="fullscren-icon" onClick={OverLay} />
            <div
              className={overlay ? "overlay" : "close-overlay"}
            >
              <div className="close-icon-container" onClick={NoOverlay}>
                <RxCross2 className="close-icon" />
              </div>
              <Carousel fade>
                {ServicesListData.map((review) => (
                  <Carousel.Item key={review.id}>
                    <img
                      className="testimonialImages d-block fullscreen-image"
                      src={review.image}
                      alt="/"
                    />
                    <p className="count-of-the-image">
                      {review.id}/{ServicesListData.length}
                    </p>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
