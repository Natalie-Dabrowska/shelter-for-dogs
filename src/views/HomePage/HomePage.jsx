import React from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import CategoryList from "../../components/CategoryList/CategoryList";
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import "./style.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Title />
        <CategoryList />
        <Scoreboard />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
