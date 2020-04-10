import React,{useState} from 'react';
import Header from '../Header/index';
import './styles.css';
import Avatar from '@material-ui/core/Avatar';
import  Dialog from '../Dialog/index';
import {makeStyles} from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import {Paper, Grid, List, ListItem, ListItemText, ListItemAvatar, Typography} from '@material-ui/core';



const useStyles = makeStyles({
    root:{
        width:'100%',
        marginLeft:'2px'
    },
   
    inline: {
        display: 'inline',
    }
})
const Requerentes = (props) =>{
    const classes = useStyles();
    const requerentes = useSelector(state=>  state.req.req_prox);
      
       
    return(
        <>
            <div className="requisicoes">
            <Header className="header" />    
        
                        <ul>
                            {requerentes.map(requerente => (
                                
                                <li key={requerente.id}>
                                        <Avatar style={{width:'100px', height:'100px'}}>A</Avatar>
                                        <strong>{requerente.nome}</strong>

                                         <p>
                                             <b>CNPJ:</b>{requerente.cnpj}
                                             <br></br>
                                             <br></br>

                                              <h4><i>R${requerente.valor},00</i></h4>
                                         
                                         </p>  
                                        


                                         <Dialog  info={requerente} /> 

                                 
                                </li>

                            ))}}
                        </ul>      
            </div>
        </>

    ); 

}

export default Requerentes;