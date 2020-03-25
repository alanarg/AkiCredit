import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import Main from './pages/Main';
import Usuario from './pages/User';
import Login from './pages/Login';
import History from './history';


const Routes = ()=>(
    <Router history={History}>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/user" component={Usuario}/>
            <Route path="/login" component={Login}/>
          
        </Switch>
    </Router>
);

export default Routes;