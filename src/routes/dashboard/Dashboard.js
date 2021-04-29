import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Dashboard = (props) => {
	const [recipes, setRecipes] = useState([]);
	const user = localStorage.getItem("username");
	// const id = localStorage.getItem("id");
	const email = localStorage.getItem("email");

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
	const addNewIngredient = () => {
		props.history.push("/recipes/add");
	};
	console.log(recipes);
	return (
		<div>
			<h1>Dashboard</h1>
			<LogoutDiv>
				<div>
					<h2>Welcome Back {user}</h2>
				</div>
				<TopDashdiv>
					<p>Email: {email}</p>

					<a href="/" onClick={Logout}>
						Log Out
					</a>
				</TopDashdiv>
			</LogoutDiv>
			<div>
				<button className="button" onClick={getRecipes}>
					Get Recipes
				</button>
				<button className="button" onClick={addNewIngredient}>
					Add New Recipe
				</button>
			</div>
			{recipes.map((rec) => {
				return (
					<Resdiv key={rec.id}>
						<h1>Title: {rec.title}</h1>
						<p>Categories: {rec.categories}</p>
						<p>Overlord: {rec.source}</p>
						<p>Contributor: {rec.contributor}</p>
						<p>Description: {rec.description}</p>
						{/* <img width="200px" src={rec.image_url}/> */}
					</Resdiv>
				);
			})}
		</div>
	);
};
const Resdiv = styled.div`
	border: 2px solid red;
	width: 50vw;
	height: 100vh;
`;
const LogoutDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 100vw;
	height: 10vh;
	justify-content: space-between;
`;
const TopDashdiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
`;
export default Dashboard;
