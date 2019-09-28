import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/login'
import Inicial from './pages/inicial'

export default function Routes(){
    return(
     <BrowserRouter>
        <Route path="/" component={Login}/>
        <Route path="/logado" component={Inicial}/>
     </BrowserRouter>   
    )
};