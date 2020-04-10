import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Conta from '@material-ui/icons/AccountCircle';
import Perfil from '@material-ui/icons/AccountCircle';
import {withRouter} from 'react-router-dom';

import { useHistory } from "react-router-dom";
import Logo from './logotipo-AKi-azul.png';
import ass from '@material-ui/icons/Assignment';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  color:{
    background: '#FFFCFC',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily:'Impact, fantasy',
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  

    let history = useHistory();

    function handleClick() {
      history.push("/user");
    }
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="flex" className={classes.color}>
        <Toolbar>
          <div >
          <a href="/"><img src={Logo} alt="aaa" width="10%"></img></a>
          </div>
          <div>
          <IconButton edge="end" color="#00acba">
            <Link to="/login"><Perfil/></Link>
          </IconButton>
          </div>
        
        
        </Toolbar>
        
      </AppBar>
    </div>
  );
  
}
export default withRouter(ButtonAppBar);
