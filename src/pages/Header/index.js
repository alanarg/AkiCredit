import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom'; 
import Menu from './menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Perfil from '@material-ui/icons/MeetingRoom';
import {withRouter} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Logo from './logotipo-AKi-azul.png';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow:1
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
  const [anchor, setAnchor] = useState(null);
  const user_data= useSelector (state=> state.usuario.user)
  
  
  
   function verify(u){
    if(u === null ||u === "undefined" ){
      return <Link to="/login"><Perfil /></Link>
    
     }else{
       if(user_data!== " "||user_data!==null){
        const letra = user_data.nome.split("");
        return <><Typography variant="h6">Olá, {user_data.nome}</Typography><Avatar style={{marginRight:'5px'}}>{letra[0]}</Avatar><Menu/></>
    
       }else{
        return <Link to="/login"><Perfil /></Link>

       }
    }
   }

    
    const classes = useStyles();
  return (
    <div className={classes.root}>
     
      <AppBar position="block" className={classes.color}>
        <Toolbar>
        <Grid container xs>
        <Grid item xs={4}>

          <a href="/"><img src={Logo} alt="aaa" width="120vw"></img></a>
          </Grid>
          <Grid item align="right" xs={8} >
          <IconButton edge="end" color="#00acba">
            {
              
               verify(localStorage.getItem('U_ID'))
            
            }
            
          </IconButton>

          </Grid>

        
          </Grid>
        
        </Toolbar>
        
      </AppBar>
    </div>
  );
  
}
export default withRouter(ButtonAppBar);
