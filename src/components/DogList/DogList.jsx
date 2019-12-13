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
    dogs: [],
    showNewDogModal: false,
    showSearch: false,
    searchDogValue: ""
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

  openNewDogModal = () => {
    this.setState({
      showNewDogModal: true
    });
  };

  closeNewDogModal = () => {
    this.setState({
      showNewDogModal: false
    });
  };

  handleShowSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch
    });
  };

  handleSearchInput = event => {
    this.setState({
      searchDogValue: event.target.value
    });
  };

  render() {
    const filteredDogs = this.state.dogs.filter(dog => {
      const dogNameLowerCase = dog.name.toLowerCase();
      const searchDogValueLowerCase = this.state.searchDogValue.toLowerCase();
      return dogNameLowerCase.startsWith(searchDogValueLowerCase);
    });
    return (
      <>
        <div className="add-place">
          <button
            className="add-dog"
            type="button"
            onClick={this.openNewDogModal}
          >
            +
          </button>
          <button onClick={this.handleShowSearch} className="look-for">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
          {this.state.showSearch && (
            <div className="form-box">
              <input
                type="text"
                className="search-dog"
                placeholder="szukaj"
                onChange={this.handleSearchInput}
                value={this.state.searchDogValue}
              ></input>
            </div>
          )}
        </div>
        <div className="doglist">
          {filteredDogs.map(dog => {
            return (
              <DogItem
                name={dog.name}
                photo={dog.photo}
                id={dog.id}
                key={dog.id}
              />
            );
          })}
          <Modal isOpen={this.state.showNewDogModal} style={customStyles}>
            <NewDogForm onSubmit={this.closeNewDogModal} />
          </Modal>
        </div>
      </>
    );
  }
}

export default DogList;
