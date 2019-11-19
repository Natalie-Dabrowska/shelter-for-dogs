import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import dogs from "../../api/data";
import "./style.css";

class DogPage extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const singleDog = dogs.find(dog => dog.id === id);
    return (
      <div className="app">
        <Header />
        <div className="dog-background">
          <div className="dog-page-name">{singleDog.name}</div>
          <div className="about-dog">
            <div className="text-dog">{singleDog.information}</div>
            <img className="dog-picture" src={singleDog.photo} alt="images" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DogPage;
