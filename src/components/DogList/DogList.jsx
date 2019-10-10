import React from "react";
import "./style.css";

const DogList = () => {
  return (
    <div className="doglist">
      <div className="dog-item">
        <div className="dog-name">Rysiu</div>
        <img className="dog-photo" src="images/pies.jpg" alt="pies" />
      </div>
    </div>
  );
};

export default DogList;
