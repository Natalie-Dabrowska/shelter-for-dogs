import React from "react";
import DogItem from "../DogItem/DogItem";
import "./style.css";

const dogs = [
  {
    id: 1,
    name: "franek",
    photo: "images/franek.jpg"
  },
  {
    id: 2,
    name: "leo",
    photo: "images/pies4.jpg"
  },

  {
    id: 3,
    name: "pepper",
    photo: "http://tiny.cc/rnc7bz"
  },
  {
    id: 4,
    name: "timon",
    photo: "images/pies2.jpg"
  },
  {
    id: 5,
    name: "tomi",
    photo: "images/pies6.jpg"
  },
  {
    id: 6,
    name: "bronek",
    photo: "images/pies3.jpg"
  },
  {
    id: 7,
    name: "pixel",
    photo: "images/Ptysiu.jpg"
  },
  {
    id: 8,
    name: "tosia",
    photo: "http://tiny.cc/e0b7bz"
  }
];

const DogList = () => {
  return (
    <div className="doglist">
      {dogs.map(dog => {
        return <DogItem name={dog.name} photo={dog.photo} />;
      })}
    </div>
  );
};

export default DogList;
