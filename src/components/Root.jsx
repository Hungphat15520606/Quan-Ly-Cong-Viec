import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Container from "./layout/Container";

export class Root extends Component {
  render() {
    return (
      <div className="container">
      <Header/>
      <Container/>
      <Footer/>
      </div>
    );
  }
}

export default Root;