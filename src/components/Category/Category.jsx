import React from "react";
import "./style.css";

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <img className="category-image" src={this.props.url} />
        <div className="category-frame">
          <button className="category-title">{this.props.title}</button>
          <div className="category-description"> {this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Category;
