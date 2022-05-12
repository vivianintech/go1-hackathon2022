import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import HostCard from "./deprecated/HostCard";
import "./Style/HostCarousel.css";

const HostCarousel = () => {
  const [hostList, setHostList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/hosts`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setHostList(data);
      });
  }, []);

  return (
    <div className="styling-hostCarousel">
      <Carousel itemsToShow={2}>
        {hostList.map(hostData => (
          <div key={hostData.id}>
            <HostCard hostData={hostData} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HostCarousel;
