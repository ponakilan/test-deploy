import React from "react"
import RecipeComponent from "./Recipe.jsx"
import ListComponent from "./ListSection.jsx"
export default function Main(){
    const [ingredientsarray, setIngredientsArray] = React.useState([])
    const [recipeShown,setRecipeShown] = React.useState(false)

    
    //this is for handling the +ingredient button
    function handleSubmit(formData){
        const newIngredient = formData.get('ingredient')
        if (newIngredient){
            setIngredientsArray(prevarray => [...prevarray,newIngredient])
        }
    }
    //this is for displaying the list of ingredients
    function ListGeneration(){
        if(ingredientsarray.length!=0){
            return (
                <ListComponent ingredientsarray = {ingredientsarray} />
            )
        }
    }
    //this is for toggling the value of whether the "do you want to generate a recipe" is seen or not 
    function toggleRecipeShow(){
        setRecipeShown(prevstate => {return !prevstate})
    }

    //this is for asking the user if they want to generate a recipe
    function RecipeGenerationRequest(){
        if(ingredientsarray.length>4){
            return (
                <div className="generate-recipe">
                    <div className="generate-recipe-text">
                        <h3>Ready for a Recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                        <div className="submit-generate-recipe">
                            <button onClick={toggleRecipeShow} className="generate-recipe-button">Get a recipe</button>
                        </div>
                </div>
            )
        }
    }
    
    //this is there so that if the recipe is displayed then the request for recipe generation component wont be displayed
    function showRecipeComponent(){
        if(recipeShown === true){
            return (
                <RecipeComponent ingredientsarray = {ingredientsarray} />
                
            )
        }
        else{
            return (
                <>
                    {RecipeGenerationRequest()}
                </>
            
            )
        }
    }
    return (
        <>
         <form action={handleSubmit} className="input-form">
            <input className="input-ingredient" type="text" placeholder="  e.g oregano" aria-label="add ingredient" name="ingredient"></input>
            <button className="add-ingredient-button">+Add ingredient</button>
        </form>
            {ListGeneration()}
            {showRecipeComponent()}

        </>
    )
}