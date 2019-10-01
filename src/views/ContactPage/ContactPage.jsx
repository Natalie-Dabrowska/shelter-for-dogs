import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./style.css";

class ContactPage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="contact">
          <div className="contact-title">Kontakt</div>
          <div className="contact-information">
            Schronisko dla bezdomnych psów
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ContactPage;
