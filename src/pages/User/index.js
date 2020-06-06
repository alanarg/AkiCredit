import React,{useState} from 'react';
import Header from '../Header';
import api from '../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { LibraryAdd} from '@material-ui/icons';
import Tabela from './tabela';
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';
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
    paper2:{
        width:'100%',
        height:'150px',
        marginTop:'15px'


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
    up:{
        color:'green'
    },
    down:{
        color:'red'

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

    async function selecaoImagem(event) {

        // setImage(URL.createObjectURL(event.target.files[0]),);
        setImage(URL.createObjectURL(event.target.files[0]))

        try{
            // const api = api.patch('/')
        }catch(error){

        }
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
                <Paper className={classes.paper2}>
                   <img src={image} alt="esc logo" className={classes.logoesc}/> 
                </Paper>
                <label for="select"><LibraryAdd className={classes.select}/></label>
                <input type="file" id="select" onChange={selecaoImagem} className={classes.btnimg}/>
                </Grid>
                <Grid item  xs={8} >

                    <Paper className={classes.paper2}>
                        <Grid container>
                            <Grid item xs={6} style={{paddingTop:'50px', paddingBottom:'50px'}}>
                                <h1 style={{ color:'#00acba'}}>R$45000,00</h1>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs style={{paddingTop:'10px'}}>
                                        <h1 style={{color:'green',marginBottom:'40px'}}><ArrowUpward className={classes.up}/>3000</h1>
                                    </Grid>
                                    <Grid item xs style={{paddingTop:'10px'}}>
                                        <h1 style={{color:'red'}}><ArrowDownward className={classes.down}/>8888</h1>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>
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
                    <Tabela style={{display:'block'}}/>
                </Grid>
                </Grid>
                
            </Container>
            {verifyNew()}

            </div>
            
        </>

}


export default Usuario;