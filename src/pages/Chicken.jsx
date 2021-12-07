import React from 'react';
import '@styles/Recipes.scss';
import useGetRecipes from '@hooks/useGetRecipes';
import Recipe from '@containers/Recipe';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import useGetRecommended from '../hooks/useGetRecommended';

const Chicken = () => {

        const { f1 } = useContext(AppContext);


    return (
        <Recipe recipes = {f1} />
    );
}

export default Chicken;
