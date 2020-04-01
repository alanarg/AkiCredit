import React from "react"
import {Formik} from "formik";
import * as Yup from "yup";
import Error from "./error";
import { withRouter } from "react-router-dom";
import history from '../../history';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Header from '../Header/index';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './css.css';
import Cadastro from './cadastro';

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
  usuario: Yup.string().min(4, "Tem que haver no mínimo quatro caracteres")
  .max(255)
  .required("Obrigatório"),
  senha: Yup.string().min(6).required("Obrigatório")
  
});

function Login(){
  const classes = useStyles();
  return( 
    <>
    <Header></Header>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Paper>
          <LockOutlinedIcon></LockOutlinedIcon>
  <Formik 
          initialValues={{usuario:"", senha: ""}}
          validationSchema={loginSchema}
          onSubmit={(values ,{setSubmitting, resetForm})=>{
            setSubmitting(true);
            setTimeout(()=>{
              resetForm();
              setSubmitting(false);
              history.push("/esc");
            })
          }}

  >
    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
    
  })=>(
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className="input-row">
          <label className="label" htmlFor="usuario">Usuário</label>
          <input 
            type="text"
            name="usuario"
            id="usuario"
            placeholder="Nome de usuário"
            onChange={handleChange}
            value={values.usuario}
            //Quando está ou não no campo 
            onBlur={handleBlur}
            
          />
        <Error className="err"touched={touched.usuario} message={errors.usuario}/>
        </div>
        <div className="input-row">
          <label className="label" htmlFor="senha">Senha</label>
          <input 
            type="password"
            name="senha"
            id="senha"
            placeholder="Sua senha"
            onChange={handleChange}
            value={values.senha}
            //Quando está ou não no campo 
            onBlur={handleBlur}
            className={touched.senha && errors.senha ? "has-error": null}

            
          />
        <Error touched={touched.senha} message={errors.senha}/>


        </div>
        <div className="input-row">
          <button id="button" type="submit" disabled={isSubmitting}><h2 id="h2">Entrar</h2></button>
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
    </>


    );
} 

export default withRouter(Login);