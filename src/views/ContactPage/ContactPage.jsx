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
          <i class="fa fa-home icon-home" aria-hidden="true"></i>
          <div className="contact-information">
            Schronisko dla bezdomnych psów
            <article>ul.polna 20 Morena</article>
            <article>01-100 Wrocław</article>
            <i class="fa fa-envelope-o icon-email" aria-hidden="true"></i>
            <article>schronisko@gmail.com</article>
            <i class="fa fa-phone icon-phone" aria-hidden="true"></i>
            <article> +78 456 564 466</article>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ContactPage;
