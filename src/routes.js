import React from 'react';
import { Switch, Route, Router, Redirect} from 'react-router-dom';
import Main from './pages/Main';
import Usuario from './pages/User';
import Login from './pages/Login';
import History from './history';
import  RequerenteInterface from './pages/requerente_interface/index';
import Dash from  './pages/ESC/dashboard';
import Req from './pages/requerentes/index';
import {useSelector} from 'react-redux';

const isLoggedIn = (u) => {
  if(localStorage.getItem('U_ID') && u === 1){
    return true;
  }else{
    return false;
  }
}
  
  const SecuredRoute = ({ component: Component, userType:user, ...rest }) => (
      
    <Route
      {...rest}
      render={props =>
      
        isLoggedIn(user) === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )

      }
    />
  );

  // const SecuredLogin = ({ component: Component, ...rest})=>(
  //     <Route {...rest} render={props => }
  // );
  

const Routes = ()=>{
  const user = useSelector(state => state.usuario.user);
  return <>
    <Router history={History}>
        <Switch>
            <Route path="/login"  component={Login}/>
            <Route exact path="/" component={Main}/>
            <Route path="/req_interface" component={RequerenteInterface} />
            <SecuredRoute path="/usuario" component={Usuario} userType={user.escStatus}/>
            <SecuredRoute path="/esc" component={Dash} userType={user.escStatus}/>
            <SecuredRoute path="/requerentes" component={Req} userType={user.escStatus}/>


          
        </Switch>
    </Router>
    </>
};

export default Routes;