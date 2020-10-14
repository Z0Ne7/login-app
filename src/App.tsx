import React from 'react';
import './styles/App.css';
import { About, Home, Login } from './components/pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes';

function App() {
  return (
    <div className="container">
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/about" exact component={About} />
            <PrivateRoute path="/" exact component={Home} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
