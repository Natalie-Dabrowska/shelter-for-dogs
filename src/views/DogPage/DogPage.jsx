import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../api/api";
import "./style.css";

class DogPage extends React.Component {
  state = {
    dogs: []
  };

  componentDidMount() {
    api.getDogs().then(response => {
      this.setState({
        dogs: response
      });
    });
  }

  render() {
    const id = this.props.match.params.id;
    const singleDog =
      this.state.dogs.find(dog => {
        return dog.id.toString() === id;
      }) || {};
    console.log(singleDog);
    return (
      <div className="app">
        <Header />
        <div className="dog-background">
          <div className="dog-page-name">{singleDog.name}</div>
          <div className="about-dog">
            <div className="text-dog">{singleDog.description}</div>
            <img className="dog-picture" src={singleDog.photo} alt="images" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DogPage;
