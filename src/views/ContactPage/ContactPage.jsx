import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import "./style.css";

class ContactPage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
