import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import ContactPage from "./views/ContactPage/ContactPage";
import VoluntaryPage from "./views/VoluntaryPage/VoluntaryPage";
import AdoptionPage from "./views/AdoptionPage/AdoptionPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/adopcja" component={AdoptionPage} />
        <Route path="/wolontariat" component={VoluntaryPage} />
        <Route path="/kontakt" component={ContactPage} />
      </BrowserRouter>
    );
  }
}

export default App;
