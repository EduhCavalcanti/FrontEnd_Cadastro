import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Login from './pages/login'
import Inicial from './pages/inicial'
import Register from './pages/registro'
import { isAuthenticad } from './services/auth'

const PrivateRoute = props =>(
    
    isAuthenticad()? (
        
        <Route {...props}/>
    ): (
        <Redirect to={{pathname:'/login',state:{from:props.location}}}/>
    )
)

export default function Routes(){
    return(
     <BrowserRouter>
        <Switch>
            <Route path="/login"  component={Login}/>
            <PrivateRoute path="/" exact component={Inicial}/>
            <Route path="/register" component={Register}/>
        </Switch>    
     </BrowserRouter>   
    )
};