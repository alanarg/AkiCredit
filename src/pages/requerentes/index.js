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
    const loc = useSelector(state=> state.esc.esc_loc);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);
    const [req, setReq] = useState([]);
    const [erromessage, setErromessage] = useState(false);
    const [total, setTotal] = useState({});
    const [new_req, setNew_req] = useState([0]);

    useEffect(() => {
      reqs(); 
    }, []);

    async function reqs(){
        setErromessage(false);
        try{
            const requerente =  await api.get('/emprestimos',{headers:{'Authorization':localStorage.getItem('U_ID')}} );
            //Transformando resposta em bjetos
            console.log(requerente);

            let reqs = Object.values(requerente.data);
           
             let reqs_filtred = reqs.filter((req)=>{
                return req.geolocation.city === loc.localidade && req.status === 1;
            });
            console.log(reqs_filtred);

            setReq(reqs_filtred);
            setOpen(false);
            // try{

            // }catch(error){
            //     console.log(error.rsesponse); 
            // }

        }catch(error){
            setOpen(false);
            return setErromessage(true);


        };
    }
        
            
    return(
        <>
            <div className="requisicoes">
            <Header className="header" />                
                        <Container className={classes.container}>
                            {/* caso haja probelmas */}
                            {erromessage && <Paper style={{marginTop:'100px', padding:'20px'}}><Typography variant="h6" color="inherit" >Tente novamente...</Typography></Paper>}
                            <Backdrop open={open}>
                                <CircularProgress color="inheri"/>
                            </Backdrop>
                        <ul style={{listStyle:'none'}}>
                            {req?req.map(requerente => (
                                <li>
                                    <p>                          
                                        {console.log(requerente)}                  
                                         <h1 style={{color:'#00acba', marginTop:'5px', marginBottom:'10px'}}>R${requerente.valor}</h1>                                      
                                         <strong >{requerente.geolocation.longitude}</strong>
                                    </p>                                          
                                         <Dialog  info={requerente} loan={requerente.emprestimoId}/> 
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