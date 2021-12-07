import React from 'react';
import Header from "@containers/Header";
import Recommended from '@containers/Recommended';
import useGetRecommended from '../hooks/useGetRecommended';
import '@styles/Home.scss';
import AppContext from '@context/AppContext.js';
import { useContext } from 'react';

const Home = () => {

    const  {f1 , f2 , f3, f4 , f5 } = useContext(AppContext);
    //const recipe = f1[0]?.recipe;

    //console.log(recipe?.ingredients);
   
     return (
        <div className="home">
           <Recommended q ={ f1[0]?.recipe }/>
           <Recommended q ={ f2[0]?.recipe }/>
           <Recommended q ={ f3[0]?.recipe }/>
           <Recommended q ={ f4[0]?.recipe }/>
           <Recommended q ={ f5[0]?.recipe }/>
        </div>
    );
}

 //
export default Home;
