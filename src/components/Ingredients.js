import React from "react";
import Form from "react-bootstrap/Form";

const Ingredients = () => {
	return (
		<div>
			<h2>Add Ingredient</h2>
			<Form.Group size="lg" controlId="source">
				<Form.Label>Source:</Form.Label>
				<Form.Control type="text" />
			</Form.Group>
			<Form.Group size="lg" controlId="username">
				<Form.Label>Contributor:</Form.Label>
				<Form.Control type="text" />
			</Form.Group>
			<Form.Group size="lg" controlId="source">
				<Form.Label>Categories:</Form.Label>​
				<Form.Control type="text" />
			</Form.Group>
		</div>
	);
};

export default Ingredients;
