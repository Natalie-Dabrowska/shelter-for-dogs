import React from "react";
import api from "../../api/api";
import "./style.css";

class NewDogForm extends React.Component {
  state = {
    dogName: "",
    information: "",
    link: "",
    isSubmitting: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    api
      .addDog(this.state.dogName, this.state.information, this.state.link)
      .then(() => {
        this.setState({ isSubmitting: false });
      });
  };

  render() {
    return (
      <div className="newdogform">
        <div className="title">Formularz</div>
        <div className="namedog">
          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <div className="column">
                <div>
                  <label className="fontsize">Imię:</label>
                  <input
                    className="tablesize"
                    name="dogName"
                    value={this.state.dogName}
                    onChange={this.handleChange}
                    disabled={this.state.isSubmitting}
                  />
                </div>
                <div>
                  <label className="input-info">Informacje:</label>
                  <textarea
                    className="infodog"
                    cols="25"
                    rows="12"
                    name="information"
                    value={this.state.information}
                    onChange={this.handleChange}
                    disabled={this.state.isSubmitting}
                  ></textarea>
                </div>
              </div>
              <div className="column">
                <div>
                  <label className="input-link">link:</label>
                  <input
                    className="tablesize"
                    classtype="text"
                    name="link"
                    value={this.state.link}
                    onChange={this.handleChange}
                    disabled={this.state.isSubmitting}
                  />
                </div>
                <div className="miniature-container">
                  <img
                    className="miniature"
                    src={this.state.link}
                    alt="pies"
                    onError={event => (event.target.style.display = "none")}
                    onLoad={event => (event.target.style.display = "block")}
                  />
                </div>
              </div>
            </div>
            <div className="approve">
              <button
                className="button-continue"
                type="submit"
                align="center"
                disabled={this.state.isSubmitting}
              >
                Zatwierdź
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewDogForm;
