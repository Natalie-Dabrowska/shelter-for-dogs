import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/wolontariat">Wolontariat</Link>
          </li>
          <li>
            <Link to="/adopcja">Adopcja</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
