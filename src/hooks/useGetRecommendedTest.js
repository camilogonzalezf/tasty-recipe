import axios from 'axios';
import {useEffect , useState } from 'react';
const API_ID = "c260d154";
const API_KEY = "a95ec28d3b036b2768eb0769341dc8d4";




const useGetRecommended = (food) => {
    //const API = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food}&to=1`;
    const [recipe, setRecipe] = useState([]);
    const [ingredientLines, setHealtLabels] = useState([]);
    

    useEffect(async () => {
        const response = await axios(API);
        setRecipe(response.data.hits[0].recipe);
        setHealtLabels(response.data.hits[0].recipe.ingredientLines);
        
    },[]);
    
    return { recipe,
             ingredientLines
         };
}

export default useGetRecommended;


//const ID_FOOD = "recipe_1b6dfeaf0988f96b187c7c9bb69a14fa"; //ID Pizza