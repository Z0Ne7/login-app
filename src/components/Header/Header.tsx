import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/about">Liên hệ</Link>
          </li>
        </ul>
        <button type="button" className="btn btn-danger float-right">
          Đăng xuất
        </button>
      </div>
  );
}

export default Header;
