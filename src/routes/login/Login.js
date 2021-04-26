import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Login.css";

export default function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return username.length > 0 && password.length > 0;
	}

	const login = (e) => {
		const credentials = { username, password };
		e.preventDefault();
		axios
			.post(
				"https://tt16-secret-recipes.herokuapp.com/api/auth/login",
				credentials
			)
			.then((res) => {
				localStorage.setItem("token", res.data.payload);
				props.history.push("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="Login">
			<Form onSubmit={login}>
				<Form.Group size="lg" controlId="username">
					<Form.Label>Username</Form.Label>
					<Form.Control
						autoFocus
						type="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size="lg" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button block size="lg" type="submit" disabled={!validateForm()}>
					Login
				</Button>
			</Form>
		</div>
	);
}
