import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Dashboard from "./routes/dashboard/Dashboard";

import Home from "./routes/home/Home";

import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Recipes from "../src/routes/recipes/Recipes";
import PrivateRoute from "../src/routes/PrivateRoute";
import AddRecipes from "../src/routes/addrecipes/AddRecipes";

function App() {
	return (
		<Switch>
			<PrivateRoute
				path="/account"
				history={useHistory()}
				component={Dashboard}
			/>
			<PrivateRoute path="/recipes/add" component={AddRecipes} />
			<PrivateRoute path="/recipes/:id" />
			{/* <Route path="/recipes/edit" component={EditRecipes} /> */}
			<Route path="/recipes" component={Recipes} history={useHistory()} />
			<Route path="/login" history={useHistory()} component={Login} />
			<Route path="/register" history={useHistory()} component={Register} />
			<Route exact path="/" component={Home} />
		</Switch>
	);
}

export default App;
