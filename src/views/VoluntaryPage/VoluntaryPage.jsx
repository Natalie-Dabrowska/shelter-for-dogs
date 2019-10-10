import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Voluntary from "../../components/Voluntary/Voluntary";
import "./style.css";

class VoluntaryPage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Voluntary />
        <Footer />
      </div>
    );
  }
}

export default VoluntaryPage;
