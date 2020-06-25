import React,{useState} from 'react';
import {Container, Paper,  Grid, Typography, FormControl, InputLabel, Select, MenuItem, TextField} from '@material-ui/core';
import {useSelector, useDispatch}  from 'react-redux';
import Header from '../Header/index';
import Slider from '@material-ui/core/Slider';
import Rodape from '../rodape/index';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Aceitos from '../req_dialog/aceitos';
import Perfil from '../req_dialog/perfil';
import Requisicoes from '../req_dialog/requisicoes';
import Requerer from '../req_dialog/requisitar';
import {Face, FindInPage,Gavel} from '@material-ui/icons';
import {makeStyles, withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
      width:'100%',
      height:'600px',
      margin:'0px',
      padding:'0px'
    },
    icons:{
      width:'100%',
      height:'50px',
      color:'white'
    },
    paper:{
        width:'100%',
        marginTop:'10px',
        borderRadius:'20px'
    },
    caixa:{
        width:'100%',
        height:'100px',
        alignSelf:'right',
        backgroundColor:'#00ACBA',
        marginBottom:'20px',
        borderRadius:'20px'
    },
    seletores:{
      display:'flex',
      width:'100%',
      backgroundColor:'white',
      padding:'20px',
      height:'100px',
      flexWrap:'0 1'
    },
    txt:{
        color:'#00acba',
        fontFamily:'Roboto',
    },
    txt2:{
      color:'white',
      fontFamily:'Roboto'
    },
    formControl:{
        width:'50px',
        borderColor:'#00acba',
    },
    
    Rodape:{
      marginTop:'20vh'
    }



});

export default function RequerenteInterface(){
    const classes = useStyles();
    const [valor, setValor] = useState(0);
    const dispatch = useDispatch();
    const [age, setAge] = useState('');
    const [mes, setMes] = useState(0);
    

    const PrettoSlider = withStyles({
        root: {
          color: '#00acba',
          
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
         tgtv = newValue*1000
      setValor(tgtv)

      }, 1000)

    }

    return <>
            <div className={classes.root}>
            <Header/>
                <Grid container 
                alignItems="center"  style={{backgroundColor:'white', marginTop:'20px', height:'600px', padding:'5px',paddingTop:'10px'}} >
                    <Grid item xs>
                       <Container style={{width:'100%'}}>
                        
                           <Typography variant="h6" className={classes.txt}>Simulador</Typography>
                            <br></br>
                            <Typography variant="h4" className={classes.txt}>Quanto deseja emprestar?</Typography>
                            <br></br>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider"  onChange={	handleChange}/>
                    
                            <Typography variant="h6" className={classes.txt}>R${valor},00</Typography>
                            <Requerer info={valor}/>
        
                       </Container>
                    </Grid>
                    <Grid item xs>
                        <Container align="center" style={{display:'block'}}>
                        <ul style={{listStyle:'none'}}>
                            <li>
                                <div className={classes.caixa}>
                                  <Perfil/><Typography variant="h6" className={classes.txt2}>Perfil</Typography>
                                </div>
                            </li>
                            <li>
                            <div className={classes.caixa}>
                              {/* <Requisicoes/> */}
                              <FindInPage className={classes.icons}/>
                            <Typography variant="h6" className={classes.txt2}>Boletos</Typography>
                                    
                                </div>
                                
                            </li>
                            <li>
                            <div className={classes.caixa}>
                              <Gavel  className={classes.icons}></Gavel>
                              <Typography variant="h6" className={classes.txt2}>Contratos</Typography>
                                    
                                </div>
                            </li>
                        </ul>
                            
                        </Container>

                    </Grid>

                    </Grid>

                 
            </div>

             

                          
            <div className={classes.Rodape}>
            <Rodape style={{marginTop:'10vh', display:'flex', align:'bottom'}}/>
            </div>
    </>


}