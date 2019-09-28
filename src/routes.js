import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/login'
import Inicial from './pages/inicial'
import Register from './pages/registro'

export default function Routes(){
    return(
     <BrowserRouter>
        <Route path="/login" exact component={Login}/>
        <Route path="/logado" component={Inicial}/>
        <Route path="/Register" component={Register}/>
     </BrowserRouter>   
    )
};