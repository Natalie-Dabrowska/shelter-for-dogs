import React from "react";
import Menu from "../Menu/Menu";
import "./style.css";

class Header extends React.Component {
  state = {
    showMenu: false
  };

  handleClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    return (
      <div className="header">
        <button onClick={this.handleClick} className="header-button">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        {this.state.showMenu && <Menu />}
        <button className="header-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default Header;
