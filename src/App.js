import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Dashboard from "./routes/dashboard/Dashboard";


import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Recipes from "../src/routes/recipes/Recipes";

function App() {


	return (
		<Switch>
			{/**<PrivateRoute to="/account/:id" /> */}
			{/* *<PrivateRoute to="/recipes/add" /> */}
			{/**<PrivateRoute to="/recipes/:id/edit" /> */}
			<Route path="/recipes/:id" />
			<Route path="/recipes" component={Dashboard} history={useHistory()} />
			<Route path="/login" history={useHistory()} component={Login} />
			<Route path="/register" history={useHistory()} component={Register} />
			<Route exact path="/" component={Home} />
		</Switch>
	);

}

export default App;
                           