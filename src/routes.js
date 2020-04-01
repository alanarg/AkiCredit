import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import Main from './pages/Main';
import Usuario from './pages/User';
import Login from './pages/Login';
import History from './history';
import Dash from  './pages/ESC/dashboard';
import Req from './pages/requerentes/index';


const Routes = ()=>(
    <Router history={History}>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/user" component={Usuario}/>
            <Route path="/login" component={Login}/>
            <Route path="/esc" component={Dash}/>
            <Route path="/requerentes" component={Req}/>


          
        </Switch>
    </Router>
);

export default Routes;