import React from 'react';
import RecipeList from '@containers/RecipeList';
import '@styles/Recipes.scss';

const Recipe = ({recipes}) => {
    return (
        <div className="Recipe">
            {recipes.map(recipex =>(
                <RecipeList recipex = {recipex}/>
            ))
        }
    </div>
    );
}

export default Recipe;