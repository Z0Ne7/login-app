import React from "react";
import "./App.css";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeRoute from './routes/Home';

function App() {
  return (
    <div className="container">
      <Router>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
