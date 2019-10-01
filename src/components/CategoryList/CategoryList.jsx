import React from "react";
import Category from "../Category/Category";
import "./style.css";

class CategoryList extends React.Component {
  render() {
    return (
      <div className="category-list">
        <Category
          url="images/pies2.jpg"
          title="dojrzały kompan"
          description="jeśli szukasz dojrzałego przyjaciela to dobrze trafiłeś"
        />
        <Category
          url="http://tiny.cc/e0b7bz"
          title="młody kompan"
          description="zaopiekuj się malcem"
        />
        <Category
          url="http://tiny.cc/rnc7bz"
          title="kompan po przejściach"
          description="wymaga większej opieki i troski ale z pewnością odwdzięczy się ogromną miłością"
        />
      </div>
    );
  }
}

export default CategoryList;
