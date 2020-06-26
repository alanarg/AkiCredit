import React,{useState, useEffect} from 'react';
import {makeStyles, withStyles } from '@material-ui/core/styles';
import api from '../../services/api';
import {CheckRounded} from '@material-ui/icons';
import {useSelector, useDispatch} from 'react-redux';
import {Button,CircularProgress, Grid, Slider} from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';



const ExpansionPanel = withStyles({
  root: {
    border: '3px solid #00acba',
    borderRadius:'15px',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);



const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);


const useStyles = makeStyles(
  {
    root:{
      width:'100%'
    },
    dado:{
      backgroundColor:'#00acba',
      borderRadius:'15px',
      marginLeft:'10px',
      color:'white',
      paddingLeft:'10px',
      fontSize:'20px'


  }
  }
)

export default function CustomizedExpansionPanels() {
  const classes = useStyles();
  const [loans, setLoans] = useState([0]);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [expanded, setExpanded] = React.useState(1);
  const [valor,setValor] = useState(0);


  useEffect(()=>{
    handleLoans();
  },[]);
  
  
  async function handleLoans(){
    setLoad(true);
    try {
      const loa = await api.get('/esc/verRequisicoesAceitas', {headers:{'Authorization': localStorage.getItem('U_ID')}});
      var res = Object.values(loa.data);
      dispatch({type:'REQ_ACEITO', req_aceito:res});
      setLoad(false);
      setLoans(res);

    } catch (error) {
      setLoad(false);
      console.log(error.response);
      
    }
  }
  async function handleUpdate(loan_id){
    let data = dataAtualFormatada();
    let d = data.toString();
    console.log(d);
    try {
      await api.patch(`/emprestimos/${loan_id}`, {status:3},{headers:{'Authorization': localStorage.getItem('U_ID')}}).then(e=> console.log(e));
      setLoad(false);

    }catch (error) {
      console.log(error);
      setLoad(false);

    }
  }
  
  

  const PrettoSlider = withStyles({
      root: {
        color: '#00acba',
        height:'200px'
        
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
  function handleSlide(e, newValue){
      clearTimeout(time)
      time = setTimeout(()=>{
         tgtv = newValue
      setValor(tgtv)
      dispatch({type:'ESC_TAXAS', taxa_geral:tgtv});
        
      }, 1000)

  }
  //Formatar data
  function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length === 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length === 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
       {load && <CircularProgress color="inherit"/>}
      {loans?loans.map(loan=>(
           <ExpansionPanel square expanded={expanded === loan.uid} onChange={handleChange(loan.uid)}>
           <ExpansionPanelSummary aria-controls="panel1d-content" id={loan.uid}>
             <div align="left" className={classes.root}>
               {loan.status === 3?<Typography variant="h6" style={{color:'#00acba'}}><CheckRounded color="inherit" />Aprovado!</Typography>:<Typography variant="h6" style={{color:'#c1c1c1'}}>Em análise</Typography>}
             </div>
             <div align="center" className={classes.root}>
                <h2 style={{color:'#00acba'}}>Valor: R${loan.valor},00</h2>
             </div>
             <div align="right" className={classes.root}>
            <Typography>{loan.dataDeCriação}</Typography>
             </div>
           </ExpansionPanelSummary>
           <ExpansionPanelDetails>
              <Grid container flexDirection="row">
              <Grid item xs={12} sm={6} >
                        <ul style={{listStyle:'none'}}>
                                <li>
                                  <p>
                                    <b>Parcelas:</b>
                                    <div className={classes.dado}>{loan.tempo}</div>
                                  </p>
                                </li>
                                <li>
                                    <b>Descrição:</b>
                                    <div className={classes.dado}>{loan.descricao}</div>

                                </li>
                                <li>
                                    <b>Localidade:</b>
                                    <div className={classes.dado}>{loan.geolocation?loan.geolocation.city:null}</div>
                                    <br></br>
                                    <div className={classes.dado}>{loan.geolocation?loan.geolocation.latitude:null}</div>
                                    <br></br>
                                    <div className={classes.dado}>{loan.geolocation?loan.geolocation.longitude:null}</div>
                                </li>                                       
                         </ul>
                     </Grid>
                     <Grid item xs>
                         <PrettoSlider orientation="vertical" valueLabelDisplay="auto" aria-label="pretto slider"  onChange={	handleSlide}/>

                     </Grid>
                     <Grid item xs>
                     <h1 style={{color:'#00acba'}}>{valor?valor: 0}% ao mês</h1>

                     </Grid> 
                     <Grid item xs>
                        {!loan.status===3?<Button onClick={e => e.preventDefault(handleUpdate(loan.emprestimoId))} style={{backgroundColor:"#00acba"}}><CheckRounded color="inherit"/>Aprovar</Button>:null}
                     </Grid>                 

              </Grid>
           </ExpansionPanelDetails>
         </ExpansionPanel>
         
      )):<Typography style={{color:'#00acba'}} variant="h4">Você ainda não interagiu com nenhum requerente</Typography>}
     
    </div>
  );
}
