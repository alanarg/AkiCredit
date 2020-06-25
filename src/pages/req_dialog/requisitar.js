import React,{useState, useEffect, Form} from 'react';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import Dialog from '@material-ui/core/Dialog';
import HorizontalLabelPositionBelowStepper from './statusLoan';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import api from '../../services/api';
import {makeStyles} from '@material-ui/core/styles';
import {LibraryAdd} from '@material-ui/icons';
import {TextField, CircularProgress, Typography, FormControl} from '@material-ui/core';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Face} from '@material-ui/icons';
import axios from 'axios';
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
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opene, setOpene] = useState(false);
  const [cep,setCep] = useState(0);
  const [cepinfo, setCepinfo] = useState(0);
  const classes = useStyles();
  const [meses, setMeses] = useState("");
  const [descricao, setDescricao] = useState("");
  const [image,setImage] = useState('');
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const v = props.info;


const Schema = Yup.object().shape({
  cep: Yup.number().min(8)
  .required("Obrigatório"),
  meses: Yup.number().max(36).required("Obrigatório"),
  descricao: Yup.string().max(255).required()
  
});
  const handleSend = async (props)=>{

    setLoad(true);
    if(cepinfo==0 || opene == true){
      setLoad(false);
      return null
    }else{
      try{

        await api.post('/emprestimos',
        { status: 1,
        geolocation: {
        	city: cepinfo.localidade,
        	latitude: cepinfo.uf,
        	longitude: cepinfo.bairro
        },
        valor: v,
        tempo: meses,
        descricao:descricao
      }, {headers:{'Authorization': localStorage.getItem('U_ID')}});

        setLoad(false);
        setOpens(true);

      }catch(error){
        setLoad(false);
        return console.log(error)
      }
        setOpens(true);

    }
  }
  const handleChange = async (c)=>{
    setCepinfo(c);
    setLoad(true);
    try{
        const re = await axios.get(`https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws/${c}/json/unicode/`);
        dispatch({type:'USER_LOC', user:re.data});
        console.log(re.data);
        setCepinfo(re.data);
        setLoad(false);
        setOpen(true);
        setOpene(false);

      }catch(error){
        setLoad(false);
        setOpene(true);

        setOpen(true);

        console.log(error.response);

      }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpens(false);
    setOpen(false);
  };
  
  return (
    <div>
        <div align="center">
      <Button style={{backgroundColor:"#00acba", color:"white", width:"100px", marginTop:'20px'}} onClick={handleClickOpen}>
          Fazer pedido
      </Button>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"><h1 style={{color:'#00acba'}}>R${props.info}.00</h1></DialogTitle>
        
        <DialogContent>

        <DialogTitle id="responsive-dialog-title">{user.nome+" "+user.sobrenome}</DialogTitle>
          
            <form>
          <DialogContentText>

          <TextField 
            variant="outlined"
            type="number" 
            style={{color:"#00acba"}}
            id="cep" 
            name="cep" 
            label="CEP" 
            autoFocus="false" 
            placeHolder="00000000" 
            classes={{color:'#00acba'}} 
            onChange={e=> e.preventDefault(handleChange(e.target.value))} 
            required 
          ></TextField>
          </DialogContentText>
          <DialogContentText>

            <TextField
             id="meses"
             name="meses"
             label="Tempo em meses"
             type="number"
             required
             style={{marginTop:'10px'}}
             onBlur={e=> e.preventDefault(setMeses(e.target.value))}
             InputLabelProps={{
               shrink: true,
             }}
             variant="outlined"
            />
             {/* <TextField
             id="telefone"
             name="telefone"
             label="Telefone"
             type="number"
             style={{marginLeft:'10px'}}
            //  onBlur={e=> e.preventDefault(setMeses(e.target.value))}
             InputLabelProps={{
               shrink: false,
             }}
             variant="outlined"
            /> */}
          </DialogContentText>
          <DialogContentText>
              <TextField
                id="descricao"
                name="descricao"
                label="Descrição"
                multiline
                rows={4}
                onBlur={e=> e.preventDefault(setDescricao(e.target.value))}
                style={{width:'400px'}}
                variant="outlined"
                required
                />
          </DialogContentText>
          
          </form>
          <button onClick={handleSend} style={{color:'white', backgroundColor:'#00acba', width:'150px', borderRadius:'15px'}}>
            enviar
          </button>
          <DialogContentText>
            <b>Cidade:</b>{cepinfo.localidade}
          </DialogContentText>
          <DialogContentText>
            <b>Estado:</b>{cepinfo.uf}
          </DialogContentText>
          <DialogContentText>
            <b>Bairro:</b>{cepinfo.bairro}
          </DialogContentText>

            {load && <CircularProgress/>}
        </DialogContent>
        <DialogActions>
        {opens && <Typography variant="h6" style={{color:'green'}}>Pedido de empréstmio enviado!</Typography>}        
        {opene && <Typography variant="h6" style={{color:'red'}}>CEP incorreto!</Typography>}        

          <Button autoFocus onClick={handleClose} color="primary">
            fechar
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}