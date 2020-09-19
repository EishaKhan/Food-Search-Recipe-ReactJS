import React from 'react'
import Recipeitems from './RecipeItems';

const Recipes = (props) => {
    const {recipes} = props;
    return(
        <div class="card-columns">
            { recipes.map(recipe =>
             <Recipeitems
             name={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}

            />)}
        </div>
    );
};

export default Recipes;