import React from 'react';
import { connect } from 'react-redux';
import {
  Redirect, Route,
  RouteComponentProps, RouteProps
} from 'react-router-dom';

interface ReduxProps {
  isAuthenticated: boolean;
}
interface Props extends ReduxProps, RouteProps {
  component: React.ComponentType<RouteComponentProps>;
}

function HomeRoute(props: Props) {
  const { location } = props;
  const { isAuthenticated, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated && !localStorage.getItem("token")) {
          return (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.home.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRoute);
