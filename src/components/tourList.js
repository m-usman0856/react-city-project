import { useState, useEffect } from "react";
import "../sass/tour.scss";
import Tour from "./Tour";
import { tourData } from "../jsondata/tourData";
const TourList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(tourData);
  }, []);

  const removeTour = (id) => {
    const prevTours = tours;
    const newTours = prevTours.filter((tourItem) => {
      return tourItem.id !== id;
    });
    setTours(newTours);
  };
  return (
    <section className="tourlist">
      {tours.map((tourItem) => {
        return (
          <Tour
            key={tourItem.id}
            tour={tourItem}
            removeTour={removeTour}
          ></Tour>
        );
      })}
    </section>
  );
};

export default TourList;
