import { useState } from "react";

const useInitialState = () => {
    const [searchText, setSearchText] = useState('');
    const [f1 , setFood1] = useState([]);
    const [f2 , setFood2] = useState([]);
    const [f3 , setFood3] = useState([]);
    const [f4 , setFood4] = useState([]);
    const [f5 , setFood5] = useState([]);
    const [readAPI , setReadAPI] = useState(false);

    const addSearch = (searchTextInput) =>{
        setSearchText( searchTextInput );
    };

    const addFood1 = (recipes) => {
        setFood1(recipes);
    }

    const addFood2 = (recipes) => {
        setFood2(recipes);
    }

    const addFood3 = (recipes) => {
        setFood3(recipes);
    }

    const addFood4 = (recipes) => {
        setFood4(recipes);
    }

    const addFood5 = (recipes) => {
        setFood5(recipes);
    }

    const addReadAPI = (stateReadAPI) => {
        setReadAPI(stateReadAPI);
    } 

    return{
        addSearch,
        searchText,
        readAPI,
        addReadAPI,
        addFood1,
        f1,
        addFood2,
        f2,
        addFood3,
        f3,
        addFood4,
        f4,
        addFood5,
        f5
    }
}

export default useInitialState; 


