import React, {useState} from "react"
import {Formik} from "formik";
import * as Yup from "yup";
import Error from "./error";
import md5 from 'md5';
import {useDispatch} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { withRouter, Redirect } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import history from '../../history';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/index';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './css.css';
import Cadastro from './cadastro';
import api from '../../services/api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    marginTop:'20px',
  },
  err:{
    
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems:'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const loginSchema = Yup.object().shape({
  email: Yup.string()
  .required("Obrigatório"),
  password: Yup.string().min(6).required("Obrigatório")
  
});


function Login(){
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [openErro,setOpenErro] = useState(false);
  const [erro, setErro] = useState('');

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  function sucessoMessage(){
    return setOpen(true);
  }

  function erroMessage(erro){
    return setOpenErro(true);

  }
  
  return( 
    <>
    {localStorage.getItem('U_ID') && history.push('/')}
    <Header></Header>

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Paper>
          <LockOutlinedIcon></LockOutlinedIcon>
  <Formik 
          initialValues={{email:"", password: ""}}
          validationSchema={loginSchema}
          onSubmit={async (values)=>{
              var senha = md5(values.password);
            try{
              setLoading(true);

             
              const resposta = await api.post('/signIn',{email:values.email,password:senha} ,{headers: {'Content-Type': 'application/json'}} );
              if(resposta.data.success==="Signed in successfully"){
                sucessoMessage();
                localStorage.setItem("U_ID", resposta.data.user.uid);
                // setUsua(resposta.data.user);
                try{
                    const escverify =  await api.get('/esc', {headers:{'Authorization': resposta.data.user.uid}});
                      dispatch({type:'ESC_OBJECT', esc:escverify.data});
                    
                }catch(error){
                    dispatch({type:'ESC_EXIST', esc:{exists:'não'}});
                  
                }
                
                dispatch({type:'USER_DATA', user:resposta.data.user});
                setLoading(false);
                //  history.push('/');


              } 
              


            }catch(error){
              setLoading(false);
              const e = error.response.data.error;
              console.log(e);
              if(e === "There is no user record corresponding to this identifier. The user may have been deleted."){
                setErro("Não existe usuário com o respectivo email!");
                erroMessage();
            }else if(e === "The password is invalid or the user does not have a password." ){
              setErro("Senha incorreta!");
              erroMessage();
            }

            }

           
          }}

  >
    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
    
  })=>(
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className="input-row">
          <label className="label" htmlFor="email">Email</label>
          <input 
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
            value={values.email}
            //Quando está ou não no campo 
            onBlur={handleBlur}
            
          />
        <Error className="err"touched={touched.email} message={errors.email}/>
        </div>
        <div className="input-row">
          <label className="label" htmlFor="password">Senha</label>
          <input 
            type="password"
            name="password"
            id="senha"
            placeholder="Sua senha"
            onChange={handleChange}
            value={values.password}
            //Quando está ou não no campo 
            onBlur={handleBlur}
            className={touched.password && errors.password ? "has-error": null}

            
          />
        <Error touched={touched.password} message={errors.password}/>


        </div>
        <div className="input-row">
          <button className="button" type="submit" disabled={isSubmitting}><h2 id="h2">Entrar</h2>
          {loading && <CircularProgress style={{BackgroundColor:'#fffff'}}/>}
          </button>
        </div>
        
      </form>


    )}

    </Formik>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Cadastrar-se">
        <Cadastro/>
      </TreeItem>
      </TreeView>

    </Paper>
    </Grid>
    </Grid>
    <Snackbar open={open} autoHideDuration={6000} >
        <Alert severity="success">
          Logado!
        </Alert>
      </Snackbar>
      <Snackbar open={openErro} autoHideDuration={6000} >
        <Alert severity="error">
         {erro}
        </Alert>
      </Snackbar>
    </>


    );
} 

export default withRouter(Login);