import React from 'react';
import '@styles/Recipes.scss';
import useGetRecipes from '@hooks/useGetRecipes';
import Recipe from '@containers/Recipe';
import { useContext } from 'react';
import AppContext from '@context/AppContext';

const Search = () => {


    const {searchText} = useContext(AppContext);

    const {recipes} = useGetRecipes(searchText); 

    return (
        <Recipe recipes = {recipes} />
    );
}

export default Search;