import {useEffect,  useState } from "react";
import axios from 'axios';

const API_ID = "c260d154";
const API_KEY = "a95ec28d3b036b2768eb0769341dc8d4";


const useInitialState = () => {

    const [f1 , setFood1] = useState([]);
    const [f2 , setFood2] = useState([]);
    const [f3 , setFood3] = useState([]);
    const [f4 , setFood4] = useState([]);
    //const [f5 , setFood5] = useState([]);
    const [readAPI , setReadAPI] = useState(false);

    const food1 = 'chicken';
    const API1 = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food1}&to=20`;

    const food2 = 'chicken';
    const API2 = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food2}&to=20`;

    useEffect(async () => {
        const response = await axios(API1);
        setFood1(response.data.hits);      
    },[]);

    const addReadAPI = () => {
        setReadAPI(true);
    } 

    return{
        f1
    }
}

export default useInitialState; 


