import React,{useState} from 'react';
import Header from '../Header';
import api from '../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { LibraryAdd} from '@material-ui/icons';
import Tabela from './tabela';
import UpdateEsc from '../Update/updateEsc';
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';
import Initial from './initial_config';
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
        width:'100px',
        height:'100px',
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
    const [file,setFile] = useState([0]);
    const [imag2, setImag2] = useState([0]);
    const [load, setLoad] = useState(true);
    const dispatch = useDispatch();
    const esc = useSelector(state => state.esc.esc);
    const user = useSelector(state => state.usuario.user);
    const i = localStorage.getItem('LOGO');

   

    function selecaoImagem(event) {
        setFile({
            file: URL.createObjectURL(event.target.files[0])
      
          });        
    }

      //Verificar se o usuário é novo para começar com as primeiras configurações
    function verifyNew(){
        // if(user.user_logo){
        //     return setImage(URL.createObjectURL(user.user_logo.File));
        // }    
        console.log(esc); 
        if(esc.exists==="não"){
            return <Initial/>
        }

    }
    function srcImg(){
        return 
    }
    function updateLogo(){
        // try{
        //     const fd = new FormData();
        //     fd.append('logo',imag2, imag2.name);
        //    await api.patch('/esc',fd,{headers:{'Authorization': localStorage.getItem('U_ID')}} ).then(res=> console.log(res.data));
        // return  console.log(user);

        console.log(file);

            
        // }catch(error){
        //     return console.log(error.response);
        // }
    }
    return <>
            <div className={classes.root}>
            
            <Header/>
            <Container  className={classes.container}>
                <Grid container   spacing={1} >
                <Grid item  xs={4}>
                <Paper className={classes.paper2}>

        {/* {setImag2(URL.createObjectURL(user.user_logo.logo))} */}
                    
                   <img src={file.File} alt="esc logo" width="200px" height="100px"/> 
                    
                </Paper>
                <label for="select"><LibraryAdd className={classes.select}/></label>
                <input type="file" id="select" onChange={selecaoImagem} className={classes.btnimg}/>
                {/* //Botão para upload */}
                {/* <button onClick={updateLogo} style={{width:'50px', height:'100px', backgroundColor:'#00acba'}}/> */}
                </Grid>
                <Grid item  xs={8} >
                <UpdateEsc/>

                    <Paper className={classes.paper2}>
                        <Grid container>
                            <Grid item xs={6} style={{paddingTop:'50px', paddingBottom:'50px'}}>
                                <h1 style={{ color:'#00acba'}}>{esc.esc?esc.esc.limiteDeCredito:0}</h1>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs style={{paddingTop:'10px'}}>
                                        <h1 style={{color:'green',marginBottom:'40px'}}><ArrowUpward className={classes.up}/>0</h1>
                                    </Grid>
                                    <Grid item xs style={{paddingTop:'10px'}}>
                                        <h1 style={{color:'red'}}><ArrowDownward className={classes.down}/>0</h1>
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