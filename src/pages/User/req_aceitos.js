import React,{useState, useEffect} from 'react';
import {makeStyles, withStyles } from '@material-ui/core/styles';
import api from '../../services/api';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar, Backdrop, CircularProgress, Grid} from '@material-ui/core';
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
  const past_loan = useSelector(state => state.esc.req_aceito);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(false);
  const [expanded, setExpanded] = React.useState(1);

  useEffect(()=>{
    handleLoans();
  },[]);
  
  
  async function handleLoans(){
    setLoad(true);
    try {
      const loa = await api.get('/esc/verRequisicoesAceitas', {headers:{'Authorization': localStorage.getItem('U_ID')}});
      dispatch({type:'REQ_ACEITO', req_aceito:loa.data});
      console.log(loa.data);
      setLoad(false);
      loa.preventDefault(setLoans(loa.data));

    } catch (error) {
      setErro(true);
      setLoad(false);
      console.log(error.response);
      
    }
  }
  
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
       {load && <CircularProgress color="inherit"/>}
      {loans === 0?past_loan.map(loan=>(
           <ExpansionPanel square expanded={expanded === loan.uid} onChange={handleChange(loan.uid)}>
           <ExpansionPanelSummary aria-controls="panel1d-content" id={loan.uid}>
             <div align="left" className={classes.root}>
               {loan.status == 3?<Typography variant="h4" style={{color:'green'}}>Aprovado!</Typography>:<Typography variant="h4" style={{color:'yellow'}}>Em análise</Typography>}
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
                                    <div className={classes.dado}>{loan.geolocation?loan.geolocation.latitude:null}</div>
                                    <div className={classes.dado}>{loan.geolocation?loan.geolocation.longitude:null}</div>
                                </li>                                       
                         </ul>
                     </Grid>                 

              </Grid>
           </ExpansionPanelDetails>
         </ExpansionPanel>
         
      )):<Typography style={{color:'#00acba'}} variant="h4">Você ainda não interagiu com nenhum requerente</Typography>}
     
    </div>
  );
}
