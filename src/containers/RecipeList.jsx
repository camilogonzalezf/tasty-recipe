import React from 'react';
import '@styles/RecipeListStyle.scss';

const RecipeList = ({recipex}) => {

    console.log();

    return (
        <div className="RecipeItem">
          <h2>{recipex.recipe.label}</h2>
          <img src={recipex.recipe.image} alt="recipex.recipe.label"/>
          <h3> <a href={recipex.recipe.url} target="_blank">View Recipe </a></h3>
        </div>
    );
}

export default RecipeList;

