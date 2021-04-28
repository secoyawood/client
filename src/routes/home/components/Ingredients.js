import React from "react";
import Form from "react-bootstrap/Form";

const Ingredients = (props) => {
	console.log(props);
	return (
		<div>
			<h2>Ingredients</h2>
			<Form.Group size="lg" controlId="ingredients_name">
				<Form.Label>Name:</Form.Label>
				<Form.Control
					type="text"
					value={props.state.ingredients[0].name}
					// onChange={(e) => setDescription(e.target.value)}
				/>
			</Form.Group>
			<Form.Group size="lg" controlId="ingredients_quantity">
				<Form.Label>quantity:</Form.Label>
				<Form.Control
					type="text"
					value={props.state.ingredients[0].quantity}
					// onChange={(e) => setDescription(e.target.value)}
				/>
			</Form.Group>
			<Form.Label>Unit:</Form.Label>
			<select>
				<option>Cups</option>
				<option>Tablespoons</option>
				<option>Teaspoons</option>
				<option>Ounces</option>
				<option>Packages</option>
			</select>
		</div>
	);
};

export default Ingredients;
