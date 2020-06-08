import React,{useState} from 'react';
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
    }
});

const MeusPlanos = ()=>{
    const classes = useStyles();
    const esc = useSelector(state=> state.esc.esc.esc_object);
    const dispatch = useDispatch();
    console.log(esc)

    return <>
        
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
  
            <Paper className={classes.paper} elevation={2}>
                <div align="center">
                        <Typography variant="h6">
                            Meus planos
                        </Typography>
                </div>
                <Grid container flexDirection="row"  >
                    <Grid item xs={6} sm={4}>
                        <ul style={{listStyle:'none'}}>
                                <li>
                                      <p>
                                          <b>Limite de crédito:</b>{esc.limiteDeCredito}
                                          <br></br>
                                          <b>Linhas de Crédito:</b>{esc.linhaDeCredito}
                                          <br></br>
                                          <b>Ultimo Recebimento:</b>{esc.ultimoRecebimento}
                                      </p>  
                                </li>
                         </ul>
                     </Grid>
                    </Grid>
            </Paper>
    </>
}
export default MeusPlanos;