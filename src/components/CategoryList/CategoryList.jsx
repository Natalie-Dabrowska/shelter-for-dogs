import React from "react";
import Category from "../Category/Category";
import "./style.css";

const categories = [
  {
    id: 1,
    url: "images/pies2.jpg",
    title: "dojrzały kompan",
    description: "jeśli szukasz dojrzałego przyjaciela to dobrze trafiłeś"
  },
  {
    id: 2,
    url: "http://tiny.cc/e0b7bz",
    title: "młody kompan",
    description: "zaopiekuj się malcem"
  },
  {
    id: 3,
    url: "http://tiny.cc/rnc7bz",
    title: "kompan po przejściach",
    description:
      "wymaga większej opieki i troski ale z pewnością odwdzięczy się ogromną miłością"
  }
];

class CategoryList extends React.Component {
  render() {
    return (
      <div className="category-list">
        <div className="prefix1">
          <span className="sep-line"></span>
          <div className="prefix">Kim jesteśmy</div>
          <div className="line-prefix">
            <p>
              {" "}
              JESTEŚMY ORGANIZACJĄ CHRONIĄCĄ I ZAPEWNIAJĄCĄ SCHRONIENIE PSOM.
            </p>
            <p> NASZĄ MISJĄ JEST ZMNIEJSZENIE POPULACJI BEZPAŃSKICH PSÓW, </p>
            <p>
              {" "}
              POPRZEZ STERYLIZACJĘ I POPRAWE DOBROSTANU ZWIERZĄT DZIĘKI
              EDUKACJI,
            </p>
            <p> WSPARCIU ZEWNĄTRZ I LUDZI KTÓRZY DECYDUJĄ SIĘ NA ADOPCJE.</p>
          </div>
          <img className="logo2" src="/images/logo2.jpg" alt="psy" />
          <span className="sep-line2"></span>
        </div>
        {/* {categories.map(category => {
          return (
            <Category
              url={category.url}
              title={category.title}
              description={category.description}
            />
          );
        })} */}
      </div>
    );
  }
}

export default CategoryList;
