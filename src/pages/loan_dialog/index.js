import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Avatar} from '@material-ui/core';
import {CheckRounded} from '@material-ui/icons';
import api from '../../services/api';
import { useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';


export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  let client_id = props.info.clientId;
  
  async function readClient(){
    console.log(client_id)
     //pegar informações do requerente
     try{
      //Aqui estou usando a authorização com o id do requerente que quero buscar, 
      //possível falha de segurança 
     const res =await api.get('/user', {headers:{'Authorization':client_id}});
     console.log(res);
     setOpen(true);
     }catch(error){
     console.log(error.response);
 
     }
  }
  const handleClickOpen = async (props) => {
   
    return readClient()
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAceitar = () => {
    //Requisitar rota de aceitar empréstimo
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" style={{borderColor:'#00acba', color:'#00acba'}} onClick={handleClickOpen}>
        Saber mais
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Avatar style={{width:'100px', height:'100px', margin:'20px'}}>A</Avatar>
        <DialogTitle id="responsive-dialog-title" style={{color:'green', fontSize:'20px'}}>R${props.info.valor},00</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button autoFocus style={{backgroundColor:'green'}} onClick={handleAceitar} >
            <CheckRounded/>
            Aceitar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}