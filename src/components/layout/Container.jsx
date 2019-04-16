import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { User } from "../user/User";
import { Home } from "../home/Home";
import { About } from "../about/About";
import Contact from "../contact/Contact";

export class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default Container;
