import axios from 'axios';
import {useEffect , useState } from 'react';
const API_ID = "c260d154";
const API_KEY = "a95ec28d3b036b2768eb0769341dc8d4";
//const food = "chicken"

const useGetRecipes = (food) => {
   
    //console.log(food);

   const API = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food}&to=20`;
    const [recipes, setRecipes] = useState([]);
    useEffect(async () => {
        const response = await axios(API);
        setRecipes(response.data.hits);
    },[]);
        
    return  {recipes};
}

export default useGetRecipes;
