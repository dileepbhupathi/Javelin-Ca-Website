import React, { useEffect, useState } from "react";
import "./AchievementsList.scss";
import CountUp from "react-countup";

export const AchievementsList = () => {
  const [yOffSet, setYoffSet] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 0) {
          setYoffSet(true);
          console.log("working");
        } else {
          setYoffSet(false);
        }
      },
      []
    );
  });
  return (
    <div className="achievements-list">
      <div className="achievements-list-item">
        <h1 className="achievements-list-item-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={18}
              duration={2}
              useEasing={true}
              useGrouping={true}
              // separator=" "
              // decimal=","
            />
          ) : null}
        </h1>
        <p className="achievements-list-item-title">Awwwards</p>
        <p className="achievements-list-item-caption">Winnings</p>
      </div>
      <div className="achievements-list-item">
        <h1 className="achievements-list-item-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={24}
              duration={2}
              useEasing={true}
              useGrouping={true}
              // separator=" "
              // decimal=","
            />
          ) : null}
        </h1>
        <p className="achievements-list-item-title">Adweek</p>
        <p className="achievements-list-item-caption">Reviews</p>
      </div>
      <div className="achievements-list-item">
        <h1 className="achievements-list-item-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={7}
              duration={1}
              useEasing={true}
              useGrouping={true}
              // separator=" "
              // decimal=","
            />
          ) : null}
        </h1>
        <p className="achievements-list-item-title">The Weeby</p>
        <p className="achievements-list-item-caption">Awards</p>
      </div>
      <div className="achievements-list-item">
        <h1 className="achievements-list-item-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={12}
              duration={2}
              useEasing={true}
              useGrouping={true}
              // separator=" "
              // decimal=","
            />
          ) : null}
        </h1>
        <p className="achievements-list-item-title">Omma</p>
        <p className="achievements-list-item-caption">Winnings</p>
      </div>
      <div className="achievements-list-item">
        <h1 className="achievements-list-item-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={4}
              duration={1}
              useEasing={true}
              useGrouping={true}
              // separator=" "
              // decimal=","
            />
          ) : null}
        </h1>
        <p className="achievements-list-item-title">Design pick</p>
        <p className="achievements-list-item-caption">Reviews</p>
      </div>
    </div>
  );
};
