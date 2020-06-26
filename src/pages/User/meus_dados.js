import React,{useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {Typography, Slider,Paper, Grid} from '@material-ui/core';



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
        marginLeft:'10px',
        color:'white',
        paddingLeft:'10px',
        fontSize:'20px'


    }
});

const MeusDados = ()=>{
    const classes = useStyles();
    const user = useSelector(state=> state.usuario.user);
    const esc = useSelector(state=> state.esc.esc);
    const taxa = useSelector(state=> state.esc.esc_taxas);

    const dispatch = useDispatch();
    const [valor,setValor] = useState(0);
  
  

    const PrettoSlider = withStyles({
        root: {
          color: '#00acba',
          width:'50px'
          
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
        dispatch({type:'ESC_TAXAS', taxa_geral:tgtv});
          
        }, 1000)

    }
  


    return <>
            <Paper className={classes.paper} elevation={2}>
                
                {/* <div align="right">
                        <UpdateUser/>
                </div> */}
                <Grid container flexDirection="row"  >
                    <Grid item xs >
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
                     
                     <Grid item xs style={{display:'flex', padding:'10px'}}>
                     <PrettoSlider orientation="vertical" valueLabelDisplay="auto" aria-label="pretto slider"  onChange={	handleChange}/>

                        <div align="center" style={{padding:'100px'}}>
                             <h1 style={{color:'#00acba'}}>Taxa nominal de {valor === 0?taxa: valor}% ao mês</h1>

                        </div>                    

                        

                     </Grid>
                    

                    </Grid>
                    <Grid container flexDirection="row"  >
                    <Grid item xs={12} sm={6} style={{padding:'10px'}}>                        
                    
                      <b>Limite de crédito:</b>  <div className={classes.dado}>{esc?esc.limiteDeCredito:0}</div>
                      <br></br>
                      <b>Linhas de Crédito:</b><div className={classes.dado}>{esc?esc.linhaDeCredito:0}</div>
                      <br></br>
                      <b>Ultimo Recebimento:</b><div className={classes.dado}>{esc?esc.ultimoRecebimento:0}</div>                              
                     </Grid>
                    

                    </Grid>
                    
            </Paper>
    </>
}
export default MeusDados;