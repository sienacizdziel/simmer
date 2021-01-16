import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import RecipeItems from "./RecipeItems";
import "./FindRecipe.css";

const FindRecipe = (props) => {
    const [input, setInput] = useState('');
    const [recipeListDefault, setRecipeListDefault] = useState();
    const [recipeList, setRecipeList] = useState();

    const fetchData = async () => {
      return await fetch(RecipeItems)
        .then(response => response.json())
        .then(data => {
           setRecipeList(data) 
           setRecipeListDefault(data)
         });}
  
    const updateInput = async (input) => {
       const filtered = recipeListDefault.filter(recipe => {
        return recipe.name.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setRecipeList(filtered);
    }
  
    useEffect( () => {fetchData()},[]);
      
    return (
      <>
        <h1>Recipe List</h1>
        <SearchBar 
         input={input} 
         onChange={updateInput}
        />
        <RecipeList recipeList={recipeList}/>
      </>
     );
  }
  
  export default FindRecipe
  