import React,{useState} from 'react';
import Header from '../Header/index';
import api from '../../services/api';
import './styles.css';
import {Cached} from '@material-ui/icons';
import {Avatar, Container, CircularProgress, Button} from '@material-ui/core';
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
        paddingLeft:'30px',
        paddingRight:'30px',
        justifyContent:'center',
        alignItems:'center'
    }
})

const Requerentes = (props) =>{
    const classes = useStyles();
    const requerentes = useSelector(state=> state.req.req_prox[0]);
    const dispatch = useDispatch();
    const [load, setLoad] = useState(false);
    const [total, setTotal] = useState({});

    
    async function searchReq(){
        setLoad(true);

        try{

            const reqs = await api.get('/emprestimos', {headers:{'Authorization': localStorage.getItem('U_ID')}});
            dispatch({type:'ADD_REQ', requerente:reqs.data});


            return setLoad(false);
            
            


        }catch(error){
            setLoad(false);
            return console.log(error)
            setLoad(false);


        }
    }    
    // useEffect(()=>{
    const rqs = Object.values(requerentes)
    console.log(rqs);
        
    // },[])   
    return(
        <>
            <div className="requisicoes">
            <Header className="header" />                
                            <div className={classes.controllers}>
                                <Button onClick={searchReq} style={{width:'80px',marginTop:'10px',height:'50px', backgroundColor:'#00acba', borderRadius:'5px', fontFamily:'Roboto'}}><Cached/></Button>
                                {load && <CircularProgress style={{marginLeft:'50px'}}/>}
                            </div>
                        <Container className={classes.container}>

                        <ul style={{listStyle:'none'}}>
                            {rqs.map(requerente => (
                                
                                

                                <li>
                                        <Avatar style={{width:'100px', height:'100px'}}>A</Avatar>
                                        <strong>{requerente.geolocation.city}</strong>

                                         <p>                                            
                                              <h4 style={{color:'green', marginTop:'5px', marginBottom:'5px'}}><i>R${requerente.valor},00</i></h4>                                      
                                         </p>                                          

                                         <Dialog  info={requerente} /> 

                                 
                                </li>

                            ))
                            }
                        </ul>
                        </Container>      
            </div>  
        </>

    ); 

}

export default Requerentes;