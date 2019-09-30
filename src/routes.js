import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/login'
import Inicial from './pages/inicial'
import Register from './pages/registro'

export default function Routes(){
    return(
     <BrowserRouter>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Inicial}/>
        <Route path="/register" exact component={Register}/>
     </BrowserRouter>   
    )
};