import React from "react";
import Modal from "react-modal";

import NewDogForm from "../NewDogForm/NewDogForm";
import DogItem from "../DogItem/DogItem";
import api from "../../api/api";
import "./style.css";

const customStyles = {
  content: {
    top: "auto",
    left: "25%",
    right: "25%",
    bottom: "7%",
    padding: "0"
  }
};

class DogList extends React.Component {
  state = {
    dogs: []
  };

  componentDidMount() {
    setInterval(() => {
      this.getDogs();
    }, 3000);

    this.getDogs();
  }

  getDogs = () => {
    api.getDogs().then(response => {
      this.setState({
        dogs: response
      });
    });
  };

  render() {
    return (
      <>
        <div className="add-place">
          <button className="add-dog" type="button">
            +
          </button>
        </div>
        <div className="doglist">
          {this.state.dogs.map(dog => {
            return (
              <DogItem
                name={dog.name}
                photo={dog.photo}
                id={dog.id}
                key={dog.id}
              />
            );
          })}
          <Modal isOpen={false} style={customStyles}>
            <NewDogForm />
          </Modal>
        </div>
      </>
    );
  }
}

export default DogList;
