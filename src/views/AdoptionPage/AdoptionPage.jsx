import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DogList from "../../components/DogList/DogList";
import NewDogForm from "../../components/NewDogForm/NewDogForm";
import "./style.css";

class AdoptionPage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <DogList />
        <Footer />
        <NewDogForm />
      </div>
    );
  }
}

export default AdoptionPage;
