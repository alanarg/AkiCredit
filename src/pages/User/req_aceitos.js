import React from 'react';
import {makeStyles, withStyles } from '@material-ui/core/styles';
import {Avatar} from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';



const emprestimos = [
  { 
    id:1,
    nome:"Jeferson",
    valor:"5.000",
    data:"27/03/2020",
    status:"Em análise",
    meses:"36",
    empresa:"Cosméticos"
  },
  {
    id:2,
    nome:"Jeferson",
    valor:"5.000",
    data:"27/03/2020",
    status:"Em análise",
    meses:"36",
    empresa:"Cosméticos"
  },
  {
    id:3,
    nome:"Jeferson",
    valor:"5.000",
    data:"27/03/2020",
    status:"Em análise",
    meses:"36",
    empresa:"Cosméticos"
  }

  
];
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
    }
  }
)

export default function CustomizedExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {emprestimos.map(emp=>(
           <ExpansionPanel square expanded={expanded === emp.id} onChange={handleChange(emp.id)}>
           <ExpansionPanelSummary aria-controls="panel1d-content" id={emp.id}>
             <div align="left" className={classes.root}>
               <Avatar style={{width:'50px', height:'50px'}}>a</Avatar>{emp.nome}
             </div>
             <div align="center" className={classes.root}>
                <h2 style={{color:'#00acba'}}>Valor: R${emp.valor},00</h2>
             </div>
             <div align="right" className={classes.root}>
            <Typography>{emp.data}</Typography>
             </div>
           </ExpansionPanelSummary>
           <ExpansionPanelDetails>
             <Typography>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
               sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
               elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
             </Typography>
           </ExpansionPanelDetails>
         </ExpansionPanel>
         
      ))}
     
    </div>
  );
}
