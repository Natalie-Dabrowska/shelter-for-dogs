import React from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import CategoryList from "../../components/CategoryList/CategoryList";
import Footer from "../../components/Footer/Footer";
import "./style.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Title />
        <CategoryList />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
