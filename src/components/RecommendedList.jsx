import React from 'react';
import '@styles/Recommended.scss';

const Recommended = ( {recipe} ) => {

    let count = 0;
    let labels = "";


    recipe?.ingredientLines.map(label =>{
        if(count === 0){
            labels = label;
            count++;
        }
        else if(count<=5){
            labels = labels + ' , ' + label;
            count++;
        }
    });

 

    labels = labels + '.';
    const recipeLabel = '/'+recipe?.label;


    return (
        <div>
            <div className="div-desktop">
                <div className="div-container">
                    <img src={recipe?.image} alt={recipe?.label}/>
                    <div className="div-container__text">
                        <h1>{recipe?.label}</h1>
                        <h2>Ingredients</h2>
                        <p>{labels}</p>
                    </div>
                </div>
                <h3> <a href={recipe?.url} target="_blank">View Recipe </a></h3>
                <div className="div-OrangeBar"></div>
            </div> 

            <div className="div-mobile">
                <div className="div-mobile_div-container">
                    <img src={recipe?.image} alt={recipe?.label}/>
                    <h1>{recipe?.label}</h1>
                </div>
                <h3> <a href={recipe?.url} target="_blank">View Recipe </a></h3>
                
                <div className="div-OrangeBar"></div>
            </div> 
        </div>
    );
}
export default Recommended;