import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  text:{
    color:'#00acba',
    fontFamily:'Roboto, sans-serif'
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h2 className={classes.text}>Depósitos total por data</h2>
      <Typography component="p" variant="h4">
        R$00.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        27/03/2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Histórico de depósitos
        </Link>
      </div>
    </React.Fragment>
  );
}