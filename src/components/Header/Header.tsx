import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

interface Props {
  logout?: any;
}
const Header = (props: Props) => {
  const { logout } = props;
  const dispatch = useDispatch();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(logout());
    localStorage.removeItem('token');
  };
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
      <form onSubmit={onSubmit}>
        <button type="submit" className="btn btn-danger float-right">
          Đăng xuất
        </button>
      </form>
    </div>
  );
};

export default Header;
