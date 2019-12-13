import React from "react";
import "./style.css";

class Scoreboard extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title-table">CO ZROBILIŚMY DO TEJ PORY</h1>

        <table>
          <tbody>
            <tr>
              <td>
                <h3>
                  <span>345</span>
                </h3>
                <p>Adopcja</p>
              </td>
              <td>
                <h3>
                  <span>879</span>
                </h3>
                <p>Opieka Medyczna</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  <span>564</span>
                </h3>
                <p>Sterylizacja i szczepienia</p>
              </td>
              <td>
                <h3>
                  <span>276</span>
                </h3>
                <p>Wolontariat</p>
              </td>
            </tr>
          </tbody>
        </table>
        <span className="sep-line3"></span>
      </div>
    );
  }
}

export default Scoreboard;
