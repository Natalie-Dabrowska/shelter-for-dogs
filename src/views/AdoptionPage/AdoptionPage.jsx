import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DogList from "../../components/DogList/DogList";

import "./style.css";

class AdoptionPage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <DogList />
        <Footer />
      </div>
    );
  }
}

export default AdoptionPage;
