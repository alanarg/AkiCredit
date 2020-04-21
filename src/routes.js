import React from 'react';
import { Switch, Route, Router, Redirect} from 'react-router-dom';
import Main from './pages/Main';
import Usuario from './pages/User';
import Login from './pages/Login';
import History from './history';
import Dash from  './pages/ESC/dashboard';
import Req from './pages/requerentes/index';

const isLoggedIn = () => {
 
  return localStorage.getItem('U_ID')!=null;
}
  
  const SecuredRoute = ({ component: Component, ...rest }) => (
      
    <Route
      {...rest}
      render={props =>
      
        isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  // const SecuredLogin = ({ component: Component, ...rest})=>(
  //     <Route {...rest} render={props => }
  // );
  

const Routes = ()=>(
    <Router history={History}>
        <Switch>
            <Route path="/login"  component={Login}/>
            <Route exact path="/" component={Main}/>
            <SecuredRoute path="/usuario" component={Usuario}/>
            <SecuredRoute path="/esc" component={Dash}/>
            <SecuredRoute path="/requerentes" component={Req}/>


          
        </Switch>
    </Router>
);

export default Routes;