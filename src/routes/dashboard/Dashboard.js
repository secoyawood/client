import React, {useState} from 'react'
import axios from 'axios'
import styled from "styled-components"


const Dashboard = (props) => {
    const [recipes, setRecipes] = useState([])
    const getRecipes = () => {
        axios.get("https://tt16-secret-recipes.herokuapp.com/api/recipes") 
        .then((res) => setRecipes(res.data))
        .catch((err) => console.log(err))
    }
    const Logout = () => {
        localStorage.clear();
        props.history.push("/");
    }
    console.log(recipes);
    return (
        <div>
            <div>  
                <h1>Welcome, </h1>
                <button onClick={Logout} >Log Out</button>
            </div>
            <div>  
                <button className="button" onClick={getRecipes}>Get Recipes</button>
            </div>
                {recipes.map((rec) => {
                    return ( <Resdiv key={rec.id}>
                        <h1>Title: {rec.title}</h1>
                        <p>Categories: {rec.categories}</p>
                        <p>Overlord: {rec.source}</p> 
                        <p>Contributor: {rec.contributor}</p>
                        <p>Description: {rec.description}</p>
                        {/* <img width="200px" src={rec.image_url}/> */}
                    </Resdiv>
                        )    
                })}
        </div>
    )
}
const Resdiv = styled.div`
border: 2px solid red;
width: 50vw;
height: 100vh;
`
export default Dashboard
