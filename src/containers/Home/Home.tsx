import React from "react";
import Header from './../../components/Header/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h1>Đây là trang chủ</h1></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
