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
        {categories.map(category => {
          return (
            <Category
              url={category.url}
              title={category.title}
              description={category.description}
            />
          );
        })}
      </div>
    );
  }
}

export default CategoryList;
