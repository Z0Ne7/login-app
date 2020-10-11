import React from 'react';
import Header from './../../components/Header/Header';
import { logout } from '../../actions/home';

const Home = () => {
  return (
    <div>
      <Header logout={logout} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Đây là trang chủ</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
