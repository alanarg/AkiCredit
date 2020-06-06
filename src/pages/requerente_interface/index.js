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
                              <Requisicoes/>
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

                    <Grid item xs={12}>
                      <Grid container justify="space-around" style={{marginTop:'10px'}}>
                    <Typography variant="h12" className={classes.txt}>Selecione o tempo a pagar e descreva sua requisição minimamente(maiores chances)</Typography>
                     
                      
                      <Grid item xs>                      
                      <Typography variant="h6" className={classes.txt}>Meses:</Typography>

                      </Grid>
                      <Grid item xs>
                      <Typography variant="h4" className={classes.txt}>{mes}</Typography>

                      </Grid>
                      <Grid item xs>                      
                      <button  onClick={()=>{ if(mes!==0){setMes(mes-1)};}} style={{ width:'50px', height:'50px',marginRight:'5px', backgroundColor:'#00acba', borderRadius:'10px'}}><h4 style={{color:'white', fontFamily:'Roboto'}}>-</h4></button> 
                      <button  onClick={()=>{ if(mes<=35){setMes(mes+1)};}} style={{ width:'50px', height:'50px', backgroundColor:'#00acba', borderRadius:'10px'}}><h4 style={{color:'white', fontFamily:'Roboto'}}>+</h4></button> 

                      </Grid>

                      
                            <TextField
                              id="outlined-multiline-static"
                              label="Descrição"
                              multiLine={true} 
                              maxLength="4"   
                              variant="outlined"
                              height="100px"
                            />
                            <button  style={{ width:'50vw', height:'50px', backgroundColor:'#00acba', borderRadius:'10px'}}><h2 style={{color:'white', fontFamily:'Roboto'}}>Requisitar</h2></button> 

                    </Grid>
                    </Grid>

                    
                </Grid>
            </div>

             

                          
            <div className={classes.Rodape}>
            <Rodape style={{marginTop:'10vh', display:'flex', align:'bottom'}}/>
            </div>
    </>


}