import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./routes/home/Home";

function App() {
  return (
    <Switch>
      {/**<PrivateRoute to="/account/:id" /> */}
      {/**<PrivateRoute to="/recipes/add" /> */}
      {/**<PrivateRoute to="/recipes/:id/edit" /> */}
      {/**<Route to="/recipes/:id" /> */}
      {/**<Route to="/recipes" /> */}
      {/**<Route to="/login" /> */}
      {/**<Route to="/register" /> */}
      <Route to="/" component={Home}/>
    </Switch>
  );
}

export default App;
