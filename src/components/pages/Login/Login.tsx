import React, { useState, useEffect, FormEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import { requestLogin } from '../../../actions/login';
import { useHistory } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
  history: any;
  Login: any;
}

const Login = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(requestLogin(username, password));
  };
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const token = props.Login.token;

    if (token && isAuthenticated) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [history, isAuthenticated, props.Login.token]);

  return (
    <div className="panel panel-primary login">
      <div className="panel-heading">
        <h3 className="panel-title">Đăng nhập</h3>
      </div>
      <div className="panel-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              className="form-control"
              onChange={handleUsername}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              onChange={handlePassword}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    Login: state.loginReducer,
    isAuthenticated: state.homeReducers.isAuthenticated,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
