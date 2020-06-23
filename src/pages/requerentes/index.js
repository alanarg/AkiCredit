import React,{useState, useEffect} from 'react';
import Header from '../Header/index';
import api from '../../services/api';
import './styles.css';
import {Cached} from '@material-ui/icons';
import {Avatar, Container, CircularProgress, Button, Backdrop} from '@material-ui/core';
import  Dialog from '../loan_dialog/index';
import {makeStyles} from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import {Paper, Grid, List, ListItem, ListItemText, ListItemAvatar, Typography} from '@material-ui/core';



const useStyles = makeStyles({
    root:{
        width:'100%',
    },
   
    inline: {
        display: 'inline',
    },
    controllers:{
        width:'100%',
        alignSelf:'center',
        marginTop:'10px',
        height:'100px',
        padding:'10px',
        backgroundColor:'white',

    },
    container:{
        width:'100%',
        display:'flex',
        paddingLeft:'35px',
        justifyContent:'center',
        alignItems:'center'
    }
})

const Requerentes = (props) =>{
    const classes = useStyles();
    const requerentes = useSelector(state=> state.req.req_prox[0]);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);
    const [req, setReq] = useState("");
    const [total, setTotal] = useState({});

    useEffect(() => {
      reqs(); 
    }, []);
    async function reqs(){
        try{
            const requerente =  await api.get('/emprestimos', {headers:{'Authorization': localStorage.getItem('U_ID')}});
            console.log(requerente);
            dispatch({type:'ADD_REQ', requerente:requerente.data});
            setReq(Object.values(requerente.data));
            setOpen(false);
            // try{

            // }catch(error){
            //     console.log(error.response); 
            // }

        }catch(error){
            return console.log(error)


        };
    }
        
            
    return(
        <>
            <div className="requisicoes">
            <Header className="header" />                
                        <Container className={classes.container}>
                            <Backdrop open={open}>
                                <CircularProgress color="inheri"/>
                            </Backdrop>
                                
                        <ul style={{listStyle:'none'}}>
                            {req?req.map(requerente => (
                                <li>
                                    <p>                                            
                                         <h1 style={{color:'#00acba', marginTop:'5px', marginBottom:'10px'}}>R${requerente.valor},00</h1>                                      
                                         <strong >{requerente.geolocation.longitude}</strong>

                                    </p>                                          
                                         <Dialog  info={requerente} /> 
                                </li>
                            )):null
                            }
                        </ul>
                        </Container>      
            </div>  
        </>

    ); 

}

export default Requerentes;