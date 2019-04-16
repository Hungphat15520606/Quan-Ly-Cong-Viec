import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export class Root extends Component {
  render() {
    return(
        <div>
            <Header/>
            {/* content is here */}
            <Footer/>
        </div>
    );
  }
}
