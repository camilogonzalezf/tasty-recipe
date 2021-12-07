import axios from 'axios';
import {useEffect , useState } from 'react';
import useInitialState from '@hooks/useInitialState';

const API_ID = "c260d154";
const API_KEY = "a95ec28d3b036b2768eb0769341dc8d4";


const useGetRecommended = (recommended1) => {

    const [food, setFood] = useState([]);

    //const API = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${recommended1}&to=20`;

    useEffect(async () => {
        const response = await axios(API);
        setFood(response.data.hits);
    },[]);
    
    return  food;
}

export default useGetRecommended;