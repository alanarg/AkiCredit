import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Avatar, CircularProgress} from '@material-ui/core';
import {CheckRounded} from '@material-ui/icons';
import api from '../../services/api';
import { useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';


export default function ResponsiveDialog(props) {
  const [load, setLoad] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [res, setRes] = React.useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  let client_id = props.info.clientId;
  let loan_id = props.loan;

  console.log(loan_id)
  
  async function readClient(){
    setLoad(true);
    console.log(client_id)
     //pegar informações do requerente
     try{
      //Aqui estou usando a authorização com o id do requerente que quero buscar, 
      //possível falha de segurança 
     await api.get('/user', {headers:{'Authorization':client_id}}).then(e=> setRes(e.data));
     setLoad(false);
     setOpen(true);
     }catch(error){
     setLoad(false);

     console.log(error.response);
 
     }
  }
  const handleClickOpen = async (props) => {
   
    return readClient()
  };

  //Atualiza emrpestimo para status 2
  async function handleAnalise(props){
    if(!loan_id){
    setLoad(false);

      alert("Tente novamente mais tarde")
      
    }else{
      setLoad(true);

      try {
        await api.patch(`/emprestimos/${loan_id}`, {escId:localStorage.getItem('U_ID'), status:2},{headers:{'Authorization': localStorage.getItem('U_ID')}}).then(e=> console.log(e));
        setLoad(false);

      } catch (error) {
        console.log(error);
        setLoad(false);

      }
    }
    
  }

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" style={{borderColor:'#00acba', color:'#00acba', marginTop:'10px'}} onClick={handleClickOpen}>
        {load && <CircularProgress color="inherit"/>}
        Saber mais
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{color:'#00ACBA', fontSize:'80px'}}><h1>{res.nome}</h1></DialogTitle>
        <DialogTitle id="responsive-dialog-title" style={{color:'#00ACBA', fontSize:'80px'}}><h1>R${props.info.valor},00</h1></DialogTitle>

        <DialogContent>
        <DialogContentText>
          <strong>CPF:</strong>{res.cpf}
          </DialogContentText>
          <DialogContentText>
          <strong>CNPJ:</strong>{res.cnpj}
          </DialogContentText>
          <DialogContentText>
          <strong>Email:</strong>{res.email}

          </DialogContentText>
          <DialogContentText>
          <strong>Telefone:</strong>{res.telefone}

          </DialogContentText>
          <DialogContentText>
          <strong>Tempo à pagar:</strong>{props.info.tempo}

          </DialogContentText>
          <DialogContentText>
          <strong>Valor:</strong>{props.info.valor}

          </DialogContentText>
          <DialogContentText>
          <strong>Descrição:</strong>{props.info.descricao}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {load && <CircularProgress color="inherit"/>}
          <Button autoFocus style={{backgroundColor:'#00acba'}} onClick={handleAnalise} >
            <CheckRounded/>
            Colocar em análise
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}