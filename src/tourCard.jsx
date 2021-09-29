import React, { Fragment, useState } from "react";
import "./tourCard.css";

export default function TourCard({ tour }) {
  const [more, setMore] = useState(false);
  const [isEliminated, setIsEliminated] = useState("block");
  let eliminatedToggle = () => {
    setIsEliminated("none");
  };

  return (
    <Fragment>
      <div className="container" style={{ display: isEliminated }}>
        <img src={tour.image} alt="istanbul" className="image" />
        <section className="header">
          <div className="title">{tour.name}</div>
          <div className="price">{tour.price}$</div>
        </section>
        <div className="description">
          {tour.description.substring(0, 50)}
          <span className={more ? "more-text" : "less-text"}>
            {tour.description.substring(51)}
          </span>
          <span
            data-testid="more-span"
            className={more ? "less-text" : "more-text more"}
            onClick={() => {
              setMore(!more);
            }}
          >
            ...more
          </span>
          <span
            className={more ? "more-text more" : "less-text"}
            onClick={() => {
              setMore(!more);
            }}
          >
            ...less
          </span>
        </div>
        <div className="rating">{tour.rate}</div>
        <button className="eliminate" onClick={eliminatedToggle}>
          Delete Tour
        </button>
      </div>
    </Fragment>
  );
}
