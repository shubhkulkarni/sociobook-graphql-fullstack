import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { appRouter, authRouter } from "./router.config";
function Router() {
  const auth = true;

  if (auth) {
    return (
      <Switch>
        {authRouter.map((route) => {
          return <Route path={route.path} component={route.component} />;
        })}
        <Redirect from="/" to="/home" />
        <Route render={() => <div>Page not found :(</div>} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        {appRouter.map((route) => {
          return <Route path={route.path} component={route.component} />;
        })}

        <Redirect from="/" to="/signin" />
        <Route render={() => <div>Page not found :(</div>} />
      </Switch>
    );
  }
}

export default Router;
