import React from "react";
import { withStyles } from "@material-ui/styles";
import { StepIcon, Grid } from "@material-ui/core";

const message = ['Empréstimo requisistado','ESC analisando seu perfil', 'Aceito!', 'Rejeitado'];

const styles = theme => ({
  root: {

    marginBottom:'10px',
    
    color: "#c1c1c1",
    "&$active": {
      color: "green"
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
      <Grid container>
        <Grid item xs={6}>
        <StepIcon icon="1"  classes={props.classes}/>
        </Grid>
        <Grid item xs={6}>
        {message[0]}

        </Grid>
        <Grid item xs={6}>

        <StepIcon icon="2"  classes={props.classes} />

        </Grid>
        <Grid item xs={6}>
            {message[1]}
        </Grid>
        <Grid item xs={6}>
            <StepIcon icon="3" completed classes={props.classes} />
        </Grid>
        <Grid item xs={6}>
            {message[2]}
          
        </Grid>
      </Grid>
     
    </div>
  );
}

export default withStyles(styles)(Demo);