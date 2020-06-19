import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {Typography, Paper, Grid, Backdrop, CircularProgress, setRef} from '@material-ui/core';



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

const Locais = ()=>{
    const classes = useStyles();
    const esc = useSelector(state=> state.esc.esc);
    const [open, setOpen] = useState(false);
    const [re, setRe] = useState(0);
    const dispatch = useDispatch();

     useEffect((esc) => {
        setOpen(true);
        async function renderi(){
            try{
                const re = await axios.get(`https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws/${esc.cep}/json/unicode/`);
                dispatch({type:'ESC_LOC', esc:re.data});
                console.log(re);
                setOpen(false);
               return setRef(re.data);

            }catch(error){
                console.log(error.response);
                setOpen(false);
    
            }
    
            
        }
        
    }, [])

          


    return <>
        
  
            <Paper className={classes.paper} elevation={2}>
                <Backdrop open={open}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <div align="center">
                        <Typography variant="h6">
                            Locais
                        </Typography>
                </div>
                <Grid container flexDirection="row"  >
                    <Grid item xs={6} sm={4}>
                    <ul style={{listStyle:'none'}}>
                        <li>
                          <p>
                              <b>Localidade:</b>{re.localidade}
                              <br></br>
                              <b>Bairro:</b>{re.bairro}
                              <br></br>
                              <b>Estado:</b>{re.uf}
                          </p>  
                     </li>
                    </ul>
                     </Grid>
                     
                     

                </Grid>
            </Paper>
    </>
}
export default Locais;