import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Chicken from '@pages/Chicken';
import Meat from '@pages/Meat';
import Bbq from '@pages/Bbq';
import FastFood from '@pages/FastFood';
import Pasta from '@pages/Pasta';
import Search from '@pages/Search';
import Header from '@containers/Header';
import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext.js';
import useGetRecommended from '@hooks/useGetRecommended';
import { useContext } from 'react';

const App = () => {

    const initialState = useInitialState();

    return (
        <AppContext.Provider value={ initialState }>
            <BrowserRouter>
                <Layout>
                <Header />
                    <Switch>
                        <Route exact path= "/" component={Home} />
                        <Route exact path= "/chicken" component={Chicken}/>
                        <Route exact path= "/meat" component={Meat}/>
                        <Route exact path= "/bbq" component={Bbq}/>
                        <Route exact path= "/fastfood" component={FastFood}/>
                        <Route exact path= "/pasta" component={Pasta}/>
                    </Switch>
                </Layout>
            </BrowserRouter>    
        </AppContext.Provider>  
 )
}
export default App;