import React,{useState} from 'react';
import Header from '../Header';
import api from '../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { LibraryAdd} from '@material-ui/icons';
import Tabela from './tabela';
import Initial from './initial_conf';
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


const Usuario = ()=>{
    const classes = useStyles();
    const [image,setImage] = useState('');
    const [load, setLoad] = useState(true);
    const dispath = useDispatch();
    const esc = useSelector(state => state.esc.esc);

    function selecaoImagem(event) {

        // setImage(URL.createObjectURL(event.target.files[0]),);
        setImage(URL.createObjectURL(event.target.files[0]))
      }
      //Verificar se o usuário é novo para começar com as primeiras configurações
     function verifyNew(){
        console.log(esc)
        if(esc.esc_object==null){
            return <Initial/>
        }


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
                    {/* completar com essas informações
                    "cep": "",
                    "cidadesLimites": "",
                    "cnpj": "12345678901",
                    "cpf": "12345678890",
                    "email": "jubileu@agmail.com",
                    "limiteDeCredito": "",
                    "linhaDeCredito": "",
                    "logo": " ",
                    "nomeESC": "",
                    "nomeResponsavel": "almanac",
                    "telefone": "",
                    "ultimoRecebimento": 1589611978696 */}
                    <Tabela/>
                </Grid>
                </Grid>
                
            </Container>
            {verifyNew()}

            </div>
            
        </>

}


export default Usuario;