import React,{useState} from 'react';
import {Container, Paper,  Grid, Typography, FormControl, InputLabel, Select, MenuItem, TextField} from '@material-ui/core';
import {useSelector, useDispatch}  from 'react-redux';
import Header from '../Header/index';
import Slider from '@material-ui/core/Slider';
import Rodape from '../rodape/index';
import Tooltip from '@material-ui/core/Tooltip';
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
    

    const PrettoSlider = withStyles({
        root: {
          color: '#00acba',
          height: 8,
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
                alignItems="center"  style={{backgroundColor:'white', marginTop:'20px', height:'600px', padding:'5px'}} >
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
                                  <Face className={classes.icons}><Perfil/></Face>
                                    <Typography variant="h6" className={classes.txt2}>Perfil</Typography>
                                </div>
                            </li>
                            <li>
                            <div className={classes.caixa}>
                              <FindInPage  className={classes.icons}></FindInPage>
                            <Typography variant="h6" className={classes.txt2}>Requisições</Typography>
                                    
                                </div>
                                
                            </li>
                            <li>
                            <div className={classes.caixa}>
                              <Gavel  className={classes.icons}></Gavel>
                            <Typography variant="h6" className={classes.txt2}>Aceitos</Typography>
                                    
                                </div>
                            </li>
                        </ul>
                            
                        </Container>
                    </Grid>
                    
                </Grid>
            </div>
            <Typography variant="h12" className={classes.txt}>Selecione o tempo a pagar e descreva sua requisição minimamente(maiores chances)</Typography>

             <div className={classes.seletores}>

                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                label="Tempo a pagar"
                              >
                                <MenuItem value="">
                                  <em>Tempo à pagar</em>
                                </MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={24}>24</MenuItem>
                                <MenuItem value={36}>36</MenuItem>

                              </Select>
                            </FormControl>
                           
                            <TextField
                              id="outlined-multiline-static"
                              label="Descrição"
                              multiLine={true} 
                              maxLength="4"   
                              variant="outlined"
                            />
                            <button  style={{ width:'50vw', height:'50px', backgroundColor:'#00acba', borderRadius:'10px'}}><h2 style={{color:'white', fontFamily:'Roboto'}}>Enviar</h2></button> 
                            </div>
            <div className={classes.Rodape}>
            <Rodape style={{marginTop:'10vh', display:'flex', align:'bottom'}}/>
            </div>
    </>


}