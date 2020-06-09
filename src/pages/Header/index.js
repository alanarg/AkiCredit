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
  const [img,setImg] = useState("");
  const user= useSelector (state=> state.usuario.user);
  const logo= useSelector (state=> state.usuario.user_logo);

  
  
   function verify(){
     
    if(!localStorage.getItem('U_ID')){
      return <Link to="/login"><Perfil /></Link>
    
    }else{
       
        const letra = user.nome.split("");
       return <><Typography variant="h6">Olá,{user.nome} </Typography><Avatar style={{marginRight:'5px'}}>{letra[0]}</Avatar><Menu/></>
    
      
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
              
               verify()
            
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
