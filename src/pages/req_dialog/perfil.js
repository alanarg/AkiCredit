import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import HorizontalLabelPositionBelowStepper from './statusLoan';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {makeStyles} from '@material-ui/core/styles';
import {LibraryAdd} from '@material-ui/icons';
import {Avatar} from '@material-ui/core';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Face} from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  container:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-star',
      borderRadius:'15px',
      marginTop:'30px',
      height:'100vh',
      backgroundColor:'white'

  },
  paper:{
      width:'100%',
      height:'50%',
      marginTop:'20px',
      marginBottom:'5px'

  },
  btnimg:{
     display:'none'

  },
  paper2:{
      width:'100%',
      height:'150px',
      marginTop:'15px'


  },
  select:{
      width:'20%',
      backgroundColor:'#00acba',
      color:'white',
      display:'flex',
      borderRadius:'15px',
      cursor:'pointer',
      margin:'10px'

      

  },
  icons:{
    width:'100%',
    height:'50px',
    color:'white'
  },
  logoesc:{
      width:'100%',
      borderRadius:'15px'
  },
  up:{
      color:'green'
  },
  down:{
      color:'red'

  },
  tabela:{

  }
 
}));




export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const [image,setImage] = useState('');
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  

  async function selecaoImagem(event) {

    // setImage(URL.createObjectURL(event.target.files[0]),);
    setImage(URL.createObjectURL(event.target.files[0]));
    
  
    try{
        // const api = api.patch('/')
    }catch(error){
  
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <Face className={classes.icons}/>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Situação do ultimo requerimento"}</DialogTitle>
        
        <DialogContent>

          <HorizontalLabelPositionBelowStepper/>
        <DialogTitle id="responsive-dialog-title">{"Minhas Informações"}</DialogTitle>
        <Avatar alt="Remy Sharp" src={image} style={{width:'100px', height:'100px'}}/>

          <label for="select"><LibraryAdd className={classes.select}/></label>
          <input type="file" id="select" onChange={selecaoImagem} className={classes.btnimg}/>
          <DialogContentText>
            Nome:
          </DialogContentText>
          <DialogContentText>
            CNPJ:
          </DialogContentText>
          <DialogContentText>
            Email:
          </DialogContentText>
          <DialogContentText>
            Telefone:
          </DialogContentText>
          <DialogContentText>
            Ramo Empresarial:
          </DialogContentText>
          <DialogContentText>
            Descrição:
          </DialogContentText>
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            ok!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}