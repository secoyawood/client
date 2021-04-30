import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Dashboard = (props) => {
	const [recipes, setRecipes] = useState([]);

	const getRecipes = () => {
		axios
			.get("https://tt16-secret-recipes.herokuapp.com/api/recipes")
			.then((res) => setRecipes(res.data))
			.catch((err) => console.log(err));
	};
	const Logout = () => {
		localStorage.clear();
		props.history.push("/");
	};
	const addRecipes = () => {
		props.history.push("/recipes/add");
	};

	const user = localStorage.getItem("username");
	const email = localStorage.getItem("email");

	return (
		<section id="two">
			<div>
				<div>
					<h1>Welcome Back {user} </h1>
				</div>
				<div>
					<p>{email}</p>
					<button className="button" onClick={Logout}>
						Log Out
					</button>
				</div>
			</div>
			<div>
				<button className="button primary" onClick={getRecipes}>
					Get Recipes
				</button>
				<button className="button primary" onClick={addRecipes}>
					Add New Recipes
				</button>
			</div>
			<div className="row">
				{recipes.map((recipe) => {
					return (
						<article key={recipe.id} className="col-6 col-12-xsmall work-item">
							<a href="/login" className="image fit thumb">
								<img src={recipe.image_url} alt="" />
							</a>
							<h3>{recipe.title}</h3>
							<p>{recipe.description}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};
//
// return (
// <div>
// 	<div>
// 		<div>
// 			<h1>Welcome </h1>
// 		</div>
// 		<div>
// 			<div>
// 				<button
// 					className="button"
// 					style={{ marginBottom: `50%` }}
// 					onClick={Logout}
// 				>
// 					Log Out
// 				</button>
// 			</div>
// 			<div>
// 				<button
// 					className="button primary"
// 					style={{ marginBottom: `50%` }}
// 					onClick={getRecipes}
// 				>
// 					Get Recipes
// 				</button>
// 			</div>
// 		</div>
// 		<div>
// 			{recipes.map((rec) => {
// 				return (
// 					<Resdiv key={rec.id}>
// 						<CardImg width="100%" height="40%" src={rec.image_url} />
// 						<h1>Title: {rec.title}</h1>
// 						<p>Categories: {rec.categories}</p>
// 						<p>Overlord: {rec.source}</p>
// 						<p>Contributor: {rec.contributor}</p>
// 						<p>Description: {rec.description}</p>
// 					</Resdiv>
// 				);
// 			})}
// 		</div>
// 	</div>
// 	{recipes.map((rec) => {
// 		return (
// 			<Resdiv key={rec.id}>
// 				<h1>Title: {rec.title}</h1>
// 				<p>Categories: {rec.categories}</p>
// 				<p>Overlord: {rec.source}</p>
// 				<p>Contributor: {rec.contributor}</p>
// 				<p>Description: {rec.description}</p>
// 				{/* <img width="200px" src={rec.image_url}/> */}
// 			</Resdiv>
//

export default Dashboard;
