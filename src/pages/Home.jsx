import React from 'react';
import Header from "@containers/Header";
import Recommended from '@containers/Recommended';
import useGetRecommended from '../hooks/useGetRecommended';
import '@styles/Home.scss';
import AppContext from '@context/AppContext.js';
import { useContext } from 'react';

const Home = () => {

    const { f1 , addFood1 ,
            f2 , addFood2 ,
            f3 , addFood3 ,
            f4 , addFood4 ,
            f5 , addFood5 ,
            readAPI, addReadAPI
             } = useContext(AppContext);
    

    let food1 , food2 ,food3 ,food4 ,food5 ;

    if(readAPI === false){
        food1 = useGetRecommended('chicken');
        food2 = useGetRecommended('Meat');
        food3 = useGetRecommended('bbq');
        food4 = useGetRecommended('fast');
        food5 = useGetRecommended('pasta');

        setTimeout(() => {
            addFood1(food1); 
            addFood2(food2); 
            addFood3(food3); 
            addFood4(food4); 
            addFood5(food5); 
            addReadAPI(!readAPI);
        }, 1000);
    }
   
     return (
        <div className="home">
            <Recommended q ={ f1[0] }/>
            <Recommended q ={ f2[0] }/>
            <Recommended q ={ f3[0] }/>
            <Recommended q ={ f4[0] }/>
        </div>
    );
}

export default Home;
