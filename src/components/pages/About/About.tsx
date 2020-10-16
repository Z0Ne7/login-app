import React from 'react';
import { Header } from '../../layouts';
import { logout } from '../../../actions';
import { Button } from '../../common';

function About() {
  return (
    <div>
      <Header logout={logout} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>About</h1>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
