import React from 'react';
import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <ul className="nav navbar-nav">
      <li className="active">
        <Link to="/">Trang chủ</Link>
      </li>
      <li>
        <Link to="/about">Liên hệ</Link>
      </li>
    </ul>
  );
}

export default MainNavbar;
