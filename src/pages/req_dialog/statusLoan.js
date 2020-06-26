import React from "react";
import { withStyles } from "@material-ui/styles";
import { StepIcon, Grid, Typography } from "@material-ui/core";

const message = ['Empréstimo requisistado','ESC analisando seu perfil', 'Aceito! A crediária entrará em contato!', 'Rejeitado'];

const styles = theme => ({
  root: {

    marginBottom:'10px',
    
    color: "#c1c1c1",
    "&$active": {
      color: "#00acba"
    },
    "&$completed": {
      color: "#00acba"
    }
  },
  active: {},
  completed: {}
});

//Pegar o status via propriedade do dialog

const Demo=(props)=> {



 
  return (
    <div>
      {props.info?props.info.map(loan=>(
        
        <Grid container>
          <Grid item xs={12}>
          <Typography variant="h4" style={{color:"#00acba"}}>R${loan.valor}</Typography>

          </Grid>
        <Grid item xs={6}>
        <StepIcon icon="1" completed classes={props.classes}/>
        </Grid>
        <Grid item xs={6}>
        {message[0]}

        </Grid>
        <Grid item xs={6}>

        <StepIcon icon="2" completed={loan.status<=2?false:true}  classes={props.classes} />

        </Grid>
        <Grid item xs={6}>
            {loan.status<=2?message[1]:<p>Analisado</p>}
        </Grid>
        <Grid item xs={6}>
            <StepIcon icon="3" completed={loan.status===3?true:false} classes={props.classes} />
        </Grid>
        <Grid item xs={6}>
            {loan.status===3?message[2]:null}
          
        </Grid>
        {/* <Button style={{backgroundColor:'red'}} onClick={e=> e.preventDefault(handleLoan(loan.em))}>Excluir</Button> */}
      </Grid>
      ))
          :null
       
      }
    
    </div>
  );
}

export default withStyles(styles)(Demo);