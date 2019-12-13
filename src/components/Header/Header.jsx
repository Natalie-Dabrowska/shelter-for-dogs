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
        <img className="logo1" src="/images/logo1.png" alt="psy" />
      </div>
    );
  }
}

export default Header;
