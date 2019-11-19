import React from "react";
import DogItem from "../DogItem/DogItem";
import api from "../../api/api";
import "./style.css";

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
      </div>
    );
  }
}

export default DogList;
