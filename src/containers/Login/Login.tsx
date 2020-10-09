import React from 'react';

function Login() {
  return (
    <div className="panel panel-primary login">
            <div className="panel-heading">
              <h3 className="panel-title">Đăng nhập</h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label>Tên đăng nhập</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
  );
}

export default Login;
