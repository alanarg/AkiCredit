import React,{useState} from 'react';
import Header from '../Header';
import { makeStyles } from '@material-ui/core/styles';
import { LibraryAdd} from '@material-ui/icons';
import Tabela from './tabela';
import { Container, Typography, Paper, Avatar, Grid} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-star',
        borderRadius:'15px',
        marginTop:'30px',
        height:'100vh',
        backgroundColor:'white'

    },
    paper:{
        width:'100%',
        height:'50%',
        marginTop:'20px',
        marginBottom:'5px'

    },
    btnimg:{
       display:'none'

    },
    select:{
        width:'100%',
        backgroundColor:'#00acba',
        color:'white',
        display:'flex',
        borderRadius:'15px',
        cursor:'pointer'

        

    },
    logoesc:{
        width:'100%',
        borderRadius:'15px'
    },
    tabela:{

    }
   
  }));
  
export default function Usuario(){
    const classes = useStyles();
    const [image,setImage] = useState('');

    function selecaoImagem(event) {

        // setImage(URL.createObjectURL(event.target.files[0]),);
        setImage(URL.createObjectURL(event.target.files[0]))
      }
    return <>
            <div className={classes.root}>
            <Header/>
            <Container  className={classes.container}>
                <Grid container   spacing={1} >
                <Grid item  xs={4}>
                <Paper className={classes.paper}>
                   <img src={image} alt="esc logo" className={classes.logoesc}/> 
                </Paper>
                <label for="select"><LibraryAdd className={classes.select}/></label>
                <input type="file" id="select" onChange={selecaoImagem} className={classes.btnimg}/>
                </Grid>
                <Grid item  xs={8}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid item  xs={12}>
                    <Tabela/>
                </Grid>
                </Grid>
                
            
            </Container>
            </div>

            
        </>

}
