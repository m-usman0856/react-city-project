import { useState } from "react";
import "../sass/tour.scss";

const Tour = (props) => {
  const [tour] = useState(props.tour);
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="tour">
      <div className="img-container">
        <img src={tour.img} alt="" width="200"></img>
        <span
          className="close-btn"
          onClick={() => {
            props.removeTour(tour.id);
          }}
        >
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{tour.city}</h3>
        <h4>{tour.name}</h4>
        <h5>
          Info
          <span>
            <i
              className="fas fa-caret-square-down"
              key={tour.id}
              onClick={handleInfoClick}
            ></i>
          </span>
        </h5>
        {showInfo && <p>{tour.info}</p>}
      </div>
    </article>
  );
};

export default Tour;
