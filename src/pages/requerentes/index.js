import React,{useState} from 'react';
import Header from '../Header/index';
import api from '../../services/api';
import './styles.css';
import {Avatar, Container} from '@material-ui/core';
import  Dialog from '../loan_dialog/index';
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
    },
    container:{
        width:'100%',
        display:'flex',
        padding:'30px',
        justifyContent:'center',
        alignItems:'center'
    }
})
const Requerentes = (props) =>{
    const classes = useStyles();
    const requerentes = useSelector(state=>  state.req.req_prox);
    const [total, setTotal] = useState({});


    try{

    }catch(error){

    }    
    // useEffect(()=>{
        
    // },[])   
    return(
        <>
            <div className="requisicoes">
            <Header className="header" />    
                        <Container className={classes.container}>
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
                        </Container>      
            </div>
        </>

    ); 

}

export default Requerentes;