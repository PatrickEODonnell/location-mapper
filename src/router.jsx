import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import NotFound from "./common/notFound";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container" style={{ marginTop: 25 }}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Router;
