import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import api from '../../services/api';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {CircularProgress, TextField, Button,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';




export default function Initial(){
  const [openErro,setOpenErro] = useState(false);
  const [openSucc,setSucc] = useState(false);
    const [open, setOpen] = useState(false);
    const [nomeEsc, setNome] = useState("");
    const esc= useSelector (state=> state.esc.esc);
    const [cep, setCep] = useState("");
    const [telefone, setTelefone] = useState("");
    const [montante, setMontante] = useState("");
    const [cidades, setCidades] = useState([0]);
    const [planos, setPlanos] = useState([0]);
    const [load, setLoad] = useState(false);

    const dispath = useDispatch();

    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    function erroMessage(erro){
      return setOpenErro(true);
  
    }
    function succMessage(){
      return setSucc(true);
  
    }
    function handleClickOpen(){
      return setOpen(true);
    }    
    function handleClose(){
      return setOpen(false);
    }    
    async function handlePronto(){
      setOpen(true);
      setLoad(true);
        

        const values = {
            nomeESC:nomeEsc,
            cep:cep,
            telefone:telefone,
            limiteDeCredito:montante,
            cidadesLimites:cidades,
            linhaDeCredito:planos,
            logo:" "
        
        };

        try{
          const re = await axios.get(`https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws/${values.cep}/json/unicode/`);
          dispath({type:'ESC_LOC', esc:{esc_loc:re}});
          console.log(re);
          setOpen(false);

        }catch(error){
          setOpen(false);

          setOpenErro(true);
          console.log(error.response);

        }
        try{
          await api.post('/esc/create', values,  {headers:{'Authorization': localStorage.getItem('U_ID')}} )
          setSucc(true);
          dispath({type:'ESC_OBJECT', esc:{esc_object:values}});
          setOpen(false);



        }catch(error){
          setOpen(true);

          setLoad(false);

          console.log(error.response.data);
          setOpenErro(true);



        }
    }
    return <>   
        <div>
        <Button onClick={handleClickOpen}>
        <EditIcon />
      </Button>
          <Dialog open={open} ia-labelledby="form-dialog-title" style={{borderRadius:'15px'}}>
        <DialogTitle id="form-dialog-title">Atualizar dados da empresa</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            placeholder={esc.esc_object?esc.esc_object.nomeESC:null}
            required
            id="name"
            label="Nome da ESC"
            type="text"
            onBlur={e=> e.preventDefault(setNome(e.target.value)) }
            fullWidth
          />
            <TextField
            autoFocus
            required
            placeholder={esc.esc_object?esc.esc_object.cep:null}
            margin="dense"
            id="name"
            label="CEP"
            type="number"
            onBlur={e=> e.preventDefault(setCep(e.target.value)) }
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder={esc.esc_object?esc.esc_object.telefone:null}
            label="Telefone"
            required
            type="number"
            onBlur={e=> e.preventDefault(setTelefone(e.target.value)) }
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder={esc.esc_object?esc.esc_object.limiteDeCredito:null}
            label="Limite de Crédito"
            type="number"
            required
            onBlur={e=> e.preventDefault(setMontante(e.target.value)) }
            fullWidth
          />  
          <TextField
          autoFocus
          margin="dense"
          id="name"
          required
          placeholder={esc.esc_object?esc.esc_object.cidadesLimites:null}
          label="Cidades limítrefes"
          type="text"
          onBlur={e=> e.preventDefault(setCidades(e.target.value)) }
          fullWidth
        />
         <TextField
          autoFocus
          margin="dense"
          id="name"
          placeholder={esc.esc_object?esc.esc_object.linhaDeCredito:null}
          label="Linhas de financiamento"
          type="text"
          required
          onBlur={e=> e.preventDefault(setPlanos(e.target.value)) }
          fullWidth
        />
        </DialogContent>
        <DialogActions>
        {load && <CircularProgress />}
          <Button onClick={handlePronto} style={{backgroundColor:'#00acba', color:'white'}}>
            Atualizar!
          </Button>
          <Button onClick={handleClose} color="#00acba">
            Fechar
          </Button>
        </DialogActions>

      </Dialog>
      <Snackbar open={openErro} autoHideDuration={6000} >
        <Alert severity="error">
         Preencha corretamente os campos!
        </Alert>
      </Snackbar>
      <Snackbar open={openSucc} autoHideDuration={6000} >
        <Alert severity="success">
          Atualizado!
        </Alert>
      </Snackbar>
    </div>
            
        </>
}