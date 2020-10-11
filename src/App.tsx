import React from "react";
import "./App.css";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="container">
      <Router>
      <React.Fragment>
          <Switch>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/about" exact component={About} />
            <PrivateRoute path="/" exact component={Home} />
          </div>
        </div>
        </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
