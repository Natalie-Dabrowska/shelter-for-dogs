import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./style.css";

class DogPage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="dog-background">
          <div className="dog-page-name">Franek</div>
          <div className="about-dog">
            <div className="text-dog">
              Piesek ma prawie 4 lata, jest wykastrowany, zaszczepiony oraz
              zaczipowany
            </div>
            <img
              className="dog-picture"
              src="/images/franek.jpg"
              alt="images"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DogPage;
