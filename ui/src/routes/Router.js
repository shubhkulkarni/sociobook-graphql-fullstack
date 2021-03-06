import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { appRouter, authRouter } from "./router.config";
import { checkAuthStatus } from "./../utils/checkAuth";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "./../redux/actions/userActions";
function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { success, userId } = checkAuthStatus();
    dispatch(
      setAuth({
        authentication: success || false,
        userId: userId || null,
      })
    );
  }, []);
  const auth = useSelector((state) => state.app.isAuthenticated);

  if (auth) {
    return (
      <Switch>
        {authRouter.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          );
        })}
        <Redirect from="/" to="/home" />
        <Route render={() => <div>Page not found :(</div>} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        {appRouter.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          );
        })}

        <Redirect from="/" to="/signin" />
        <Route render={() => <div>Page not found :(</div>} />
      </Switch>
    );
  }
}

export default Router;
