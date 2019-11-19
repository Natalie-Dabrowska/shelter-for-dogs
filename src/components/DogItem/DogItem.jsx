import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const DogItem = ({ id, name, photo }) => {
  const dogPageUrl = `/pies/${id}`;
  return (
    <div className="dog-item">
      <Link to={dogPageUrl}>
        <button className="dog-name">{name}</button>
      </Link>
      <img className="dog-photo" src={photo} alt="pies" />
    </div>
  );
};

export default DogItem;
