import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const DogItem = props => {
  return (
    <div className="dog-item">
      <Link to="/pies/1">
        <button class="dog-name">{props.name}</button>
      </Link>
      <img className="dog-photo" src={props.photo} alt="pies" />
    </div>
  );
};

export default DogItem;
