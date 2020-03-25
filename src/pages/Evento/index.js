import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
import {Grid, Paper, TextField} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    background: '#00ACBA',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily:'Impact, fantasy',
    
  },
  add:{
    backgroundColor: '#00ACBA',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
       <AddIcon className={classes.add}/>
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
             Adicione seu evento
            </Typography>
            <Button autoFocus className={classes.title} variant="h1" onClick={handleClose}>
              Salvar
            </Button>
          </Toolbar>
        </AppBar>
        <div align="center">
        <Paper>
        <Grid container
             justify="center"
             alignItems="center"
        >
            <Grid item xs={6}>
                
                    <Typography variant="h4" className={classes.title} >
                        Título
                    </Typography>
                    <br></br>
                     <TextField id="outlined-basic" fullWidth="true" label="Outlined" variant="outlined" />

            </Grid>
        </Grid>
        </Paper>

        </div>
      </Dialog>
    </div>
  );
}
