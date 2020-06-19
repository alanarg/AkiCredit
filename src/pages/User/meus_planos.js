import React,{useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {Typography, Paper, Grid, Slider} from '@material-ui/core';



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
        padding:'5px',
        borderRadius:'15px'
    }
});

const MeusPlanos = ()=>{
    const classes = useStyles();
    const esc = useSelector(state=> state.esc.esc);
    const dispatch = useDispatch();
    const [valor,setValor] = useState(0);
  
  
    const PrettoSlider = withStyles({
        root: {
          color: '#00acba',
          width:'250px'
          
        },
       
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      })(Slider);
    let time = null
    let tgtv =0
    //Simples debounce para o slider
    function handleChange(e, newValue){
        clearTimeout(time)
        time = setTimeout(()=>{
           tgtv = newValue
        setValor(tgtv)
  
        }, 1000)
  
      }
  

    return <>

            <Paper className={classes.paper} elevation={2}>
                <div align="center">
                        <Typography variant="h6">
                            Meus planos
                        </Typography>
                </div>
                <Grid container flexDirection="row"  >
                    <Grid item xs={12} sm={6}>
                        <ul style={{listStyle:'none'}}>
                                <li>
                                      <p>
                                          <b>Limite de crédito:</b>  <div className={classes.dado}>{esc?esc.limiteDeCredito:null}</div>
                                          <br></br>
                                          <b>Linhas de Crédito:</b><div className={classes.dado}>{esc?esc.linhaDeCredito:null}</div>
                                          <br></br>
                                          <b>Ultimo Recebimento:</b><div className={classes.dado}>{esc?esc.ultimoRecebimento:null}</div>
                                      </p>  
                                </li>
                         </ul>
                     </Grid>
                     <Grid item xs={12} sm={6} style={{paddingLeft:'150px'}}>
                         <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider"  onChange={	handleChange}/><h1 style={{color:'#00acba'}}>{valor}% ao mês</h1>

                     </Grid>
                    </Grid>
            </Paper>
    </>
}
export default MeusPlanos;