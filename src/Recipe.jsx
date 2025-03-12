import  getChatResponse  from "./OpenAI.jsx"; 
import React from "react";


export default function RecipeComponent({ ingredientsarray }) {
    const [recipe, setRecipe] = React.useState("<p>Generating recipe...</p>");

    React.useEffect(() => {
        async function fetchRecipe() {
            const rawRecipe = await getChatResponse(ingredientsarray);
            setRecipe(rawRecipe); // Directly set HTML response
        }

        fetchRecipe();
    }, [ingredientsarray]);

    return (
        <div className="recipe-container" dangerouslySetInnerHTML={{ __html: recipe }} />
    );
}