import React,{useState} from 'react';
import UpdateUser from '../Update/updateUser';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {Typography, Paper, Grid} from '@material-ui/core';



const useStyles = makeStyles({ 
    root:{
        width:'100%',
        display:'flex'

    },
    paper:{
        width:'100%',
        padding:'10px'
    },
    dado:{
        backgroundColor:'#00acba',
        borderRadius:'15px',
        marginLeft:'50px',
        color:'white',
        paddingLeft:'50px',
        fontSize:'20px'


    }
});

const MeusDados = ()=>{
    const classes = useStyles();
    const user = useSelector(state=> state.usuario.user);
    const dispatch = useDispatch();

    return <>
        
        {/* "uid": "0ogZSDK6RRUOjGv60y4egZBGhbD2",
    "nome": "almanac",
    "sobrenome": "projeto",
    "cpf": 12345678890,
    "cnpj": 12345678901,
    "email": "jubileu@agmail.com",
    "emailVerified": false,
    "phoneNumber": null */}
  
            <Paper className={classes.paper} elevation={2}>
                <div align="center">
                        <Typography variant="h6">
                            Meus dados
                        </Typography>
                </div>
                <div align="right">
                        <UpdateUser/>
                </div>
                <Grid container flexDirection="row"  >
                    <Grid item xs={12} sm={6} >
                        <ul style={{listStyle:'none'}}>
                                <li>
                                      <p>
                                          <b>Nome:</b>
                                          <div className={classes.dado}>{user.nome+" "+user.sobrenome}</div>
                                        </p>
                                </li>
                                <li>
                                    <b>CPF:</b>
                                    <div className={classes.dado}>{user.cpf}</div>

                                </li>
                                <li>
                                    <b>CNPJ:</b>
                                    <div className={classes.dado}>{user.cnpj}</div>

                                </li>
                                <li>
                                <b>EMAIL:</b>
                                <div className={classes.dado}>{user.email}</div>

                                </li>
                                <li>
                                <b>CPF:</b>
                                <div className={classes.dado}>{user.cpf}</div>

                                </li>
                                <li>
                                <b>CNPJ:</b>
                                <div className={classes.dado}>{user.cnpj}</div>

                                </li>
                                       
                         </ul>
                     </Grid>                 

                        </Grid>
            </Paper>
    </>
}
export default MeusDados;