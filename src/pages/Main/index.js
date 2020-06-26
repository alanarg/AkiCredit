import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import draw from './undraw_data_reports_706v.svg';
import draw3 from './undraw_business_shop_qw5t.svg';
import draw2 from './undraw_people_search_wctu.svg';
import Header from '../Header/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Padeiro from './padeiro.jpg';
import World from '@material-ui/icons/Language';
import Secure from '@material-ui/icons/Security';
import Paper from '@material-ui/core/Paper';
import aki from './Icon-Aki-2-branco.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import log from '../Header/logotipo-AKi-azul.png';
import Grid from '@material-ui/core/Grid';
import Rodape from '../rodape/index';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Devices from  '@material-ui/icons/Grain';
import { useHistory } from "react-router-dom";

import './css.css';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    fontFamily:'Andale Mono, monospace',
  },
  div:{
    backgroundColor:'#00ACBA',
  },
  arte:{
    width:'300px',
    height:'200px'
  },
  paper: {
    paddingBottom: 50,
  },
  card:{
     padding:10, 
     marginTop:10, 
     marginBottom:10,
  },
  car:{
    border: '1px solid #00acba'
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  color:{
    background: 'linear-gradient(45deg, #00ACBA 30%, #FFFFF 90%)',
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#FFFCFC',

  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'left',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    background: '#2E9AFE',

  },
}));

export default function BottomAppBar() {
  const classes = useStyles();


  return (
    <React.Fragment>
        
        <Header position="fixed"/>
        
      

      <CssBaseline />
        <Grid container style={{backgroundImage:`url(${Padeiro})`, backgroundSize:'100%', backgroundColor:'#E0F8F7', padding:'50px',backgroundRepeat:"no-repeat", marginTop:'10px'}}>
        {/* <div style={{backgroundImage:`url(${Padeiro})`, backgroundSize:'100%',width:'100%', marginTop:"-50px",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}> */}
        <Grid
            container
           direction="column"
           justify="space-between"
           alignItems="flex-end"
           xs={12} sm={6}
          >
            <Grid item >
            <img alt="logo"  width="45%" src={log}></img>

            </Grid>
            <Grid item xs>
           <Paper elevation={3} style={{background:"linear-gradient(45deg, #00ACBA 40%, #E0F8F7 70%)", borderRadius:"100px",padding:'10px', marginBottom:'50px', marginTop:'30px'}}>
           <Typography variant="h6">
           <Devices/>
           Você Empresa Simples de Crédito!

              </Typography>
           </Paper>
           </Grid>
           <Grid item xs>
           <Paper elevation={3} style={{background:"linear-gradient(45deg,#00ACBA 40%, #E0F8F7 70%)", borderRadius:"100px",padding:'10px', marginBottom:'50px' }}>
           <Typography variant="h6">
           <Devices />

           Tenha total supervisão tributária

              </Typography>
           </Paper>
           </Grid>
           <Grid item xs>
           <Paper elevation={3} style={{background:"linear-gradient(45deg, #00ACBA 40%, #E0F8F7 70%)",borderRadius:"100px", padding:'10px'}}>
           <Typography variant="h6" fontFamily="baboo">
           <Devices />

           Planeje e aprove requisições
              </Typography>
           </Paper>
           </Grid>
        </Grid>
    
        {/* </div> */}
        </Grid>
        <br></br>
        <br></br>
        <div >
        <Container maxWidth="md" flexDirestion="row" component="main" style={{marginBottom:"70px", marginTop:'20px'}}>
          
        <Grid container  justify="space-between" alignItems="center" >
        <Divider/>
            <Grid item>
            </Grid>
            <Grid item xs >
              <Card className={classes.car}> 
                <CardHeader
                  title="Encontre requerentes "
                  subheader="Filtragens de perfis para sua ESC"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent root=".MuiCardContent-root">
                  <div >
                      <img src={draw2} alt="aki.credit" className={classes.arte}/>

                   
                  </div>
                
                </CardContent>
                <CardActions>
                  {/* espaço para ações ouj botões */}
                </CardActions>
              </Card>
             
            </Grid>
            <Grid item  xs  >
              <Card className={classes.car}> 
                <CardHeader
                  title="Gerencie pagamentos e sócios"
                  subheader="Emissão de contratos e boletos bancários"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div >
                  <img src={draw} alt="aki.credit" className={classes.arte}/>
                      
                  </div>
                
                </CardContent>
                <CardActions>
                  {/* espaço para ações ouj botões */}
                </CardActions>
              </Card>
             
            </Grid>
            <Grid item  xs  >
              <Card className={classes.car}> 
                <CardHeader
                  title="Acompanhe  rendimentos"
                  subheader="Mantenha contato com seus clientes e programe notificações"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div align="center">
                  <img src={draw3} alt="aki.credit" className={classes.arte}/>

                   
                  </div>
                
                </CardContent>
                <CardActions>
                  {/* espaço para ações ouj botões */}
                </CardActions>
              </Card>
            
             
            </Grid>
               <Divider/>
        </Grid>
      </Container>
      </div>
      <div style={{background:'#00ACBA'}}>
         <Grid container  
          direction="row"
           justify="center"
           alignItems="flex-start"
           xs={12}
           >
           
            <Grid item xs={12} >
              <CardContent>
                     <Secure style={{width:'100%', height:'150px', color:'#FFFFFF'}} ></Secure>
                     <Typography variant="h4" align="center">
                       Segurança e privacidade 
                     </Typography>
                     <br></br>
                     <Typography variant="h6" align="center" >
                       Todas as negociações acontecidas são protegidas e visualizáveis 
                     </Typography>
                     <Typography variant="h6" align="center" >

                     apenas aos sócios integrantes da empresa, assim como a identidade da mesma, 
                     </Typography>
                     <Typography variant="h6" align="center" >

                     apenas revelada aos requerentes aceitos.
                     </Typography>


              </CardContent>
            
            </Grid>
            <Grid item xs={12}>
            <CardContent>
                     <World style={{width:'100%', height:'150px', color:'#FFFFFF'}} ></World>
                     <Typography variant="h4" align="center">
                       Faça parte dessa evolução  
                     </Typography>
                     <br></br>

                     <Typography variant="h6" align="center" >
                       Todas as negociações acontecidas são protegidas e visualizáveis 
                     </Typography>
                     <Typography variant="h6" align="center" >

                     apenas aos sócios integrantes da empresa, assim como a identidade da mesma,  
                     </Typography>
                     <Typography variant="h6" align="center" >

                     apenas revelada aos requerentes aceitos.
                     </Typography>

              </CardContent>
            </Grid>
            <Grid item xs={12}>
                <CardContent>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            style={{margin:"20px", marginLeft:'36%',maxWidth:"30%"}}
            image={aki}

            ></CardMedia>
            </CardContent>
            </Grid>
            </Grid>
            
          <Rodape/>
      </div>
        
     
    </React.Fragment>
  );
}
