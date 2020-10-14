import React from 'react';
import { Header } from '../../layouts';
import { logout } from '../../../actions';

function About() {
  return (
    <div>
      <Header logout={logout} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Giới thiệu</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
