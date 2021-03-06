import {useEffect,  useState } from "react";
import axios from 'axios';

const API_ID = "c260d154";
const API_KEY = "a95ec28d3b036b2768eb0769341dc8d4";

const useInitialState = () => {

    const [f1 , setFood1] = useState([]);
    const [f2 , setFood2] = useState([]);
    const [f3 , setFood3] = useState([]);
    const [f4 , setFood4] = useState([]);
    const [f5 , setFood5] = useState([]);
    const [searchText , setSearchText] = useState(''); 

    const food1 = 'chicken';
    const API1 = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food1}&to=20`;

    const food2 = 'meat';
   const API2 = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food2}&to=20`;

    const food3 = 'bbq';
    const API3 = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food3}&to=20`;

    const food4 = 'fast';
    const API4 = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food4}&to=20`;

    const food5 = 'pasta';
    const API5 = `http://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${food5}&to=20`;

    useEffect(async () => {
        const response = await axios(API1);
        setFood1(response.data.hits);      
    },[]);

    useEffect(async () => {
        const response = await axios(API2);
        setFood2(response.data.hits);      
    },[]);


    useEffect(async () => {
        const response = await axios(API3);
        setFood3(response.data.hits);      
    },[]);

    useEffect(async () => {
        const response = await axios(API4);
        setFood4(response.data.hits);      
    },[]);

    useEffect(async () => {
        const response = await axios(API5);
        setFood5(response.data.hits);      
    },[]);

    const addSearch = (searchText) =>{
        setSearchText(searchText);
    }

    return{
        f1, f2 , f2, f3 , f4 , f5 , addSearch
    }
}

export default useInitialState; 


