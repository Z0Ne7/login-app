import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LogoutButton } from '../../common/Button';
import { MainNavbar } from '../../common/Navbar';

interface Props {
  logout?: any;
}
const Header = (props: Props) => {
  const { logout } = props;
  const dispatch = useDispatch();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(logout());
    history.push('/login');
  };
  const history = useHistory();
  return (
    <div className="navbar navbar-default">
      <MainNavbar />
      <form onSubmit={onSubmit}>
        <LogoutButton />
      </form>
    </div>
  );
};

export default Header;
