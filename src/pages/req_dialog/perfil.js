import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import HorizontalLabelPositionBelowStepper from './statusLoan';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {makeStyles} from '@material-ui/core/styles';
import api from '../../services/api';
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
  const user = useSelector(state=> state.usuario.user);
  const theme = useTheme();
  const classes = useStyles();
  const [loan, setLoan] = useState([0]);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  


  //Quando implementado avatares
  // async function selecaoImagem(event) {

  //   // setImage(URL.createObjectURL(event.target.files[0]),);
  //   setImage(URL.createObjectURL(event.target.files[0]));
    
  
  //   try{
  //       // const api = api.patch('/')
  //   }catch(error){
  
  //   }
  // }

  useEffect(()=>{
    verifyLoans()
  },[]);

  async function verifyLoans(){
    try {
      const res = await api.get('/emprestimos', {headers:{'Authorization':localStorage.getItem('U_ID')}});    
      const l = Object.values(res.data);
      let loan_filtred = l.filter((l)=>{
        return l.clientId === localStorage.getItem('U_ID');
      });
      setLoan(loan_filtred);
    
    } catch (error) {
      alert(error.response);
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  // cnpj6779445000106
  // cpf7284911174
  // email"teste10@gmail.com"
  // emailVerifiedfalse
  // escStatusnull
  // logo""
  // nome"teste"
  // phoneNumbernull
  // sobrenome
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

          <HorizontalLabelPositionBelowStepper info={loan}/>
        <DialogTitle id="responsive-dialog-title">{user.nome+" "+user.sobrenome}</DialogTitle>
          
          <DialogContentText>
          <strong>CNPJ:</strong>{user.cnpj}
          </DialogContentText>
          <DialogContentText>
          <strong>CPF:</strong>{user.cpf}
          </DialogContentText>
          <DialogContentText>
          <strong>Email:</strong>{user.email}
          </DialogContentText>
          <DialogContentText>
          <strong>Telefone:</strong>{user.phoneNumber}
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