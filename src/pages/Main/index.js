import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/index';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Padeiro from './padeiro.jpg';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Perfil from '@material-ui/icons/AccountCircle';
import Ass from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import aki from './Icon-Aki-2-branco.png';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import logo from './pant.jpg';
import log from '../Header/logotipo-AKi-azul.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Devices from  '@material-ui/icons/Grain';
import './css.css';

const messages = [
  {
    id: 1,
    primary: 'Evento 1',
    secondary: "evento 1",
    person: logo,
    logo:logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  {
    id: 3,
    primary: 'Eveno 3',
    secondary: 'Evento 3',
    person: logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  {
    id: 2,
    primary: 'Evento 2',
    secondary: `Evento 2`,
    person: logo,
  },
  
  
  

 
];
const tiers = [
  {
    title: 'De quanto você precisa?',
    price: '$$$',
    description: ['Já se decidiu?', 'Use o botão +', 'Preencha o formulário'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Propostas ',
    subheader: 'imediatas',
    price: '15',
    description: [
      'Se a provado seu hisótrico financeiro',
      'propostas serão enviadas ao seu perfil',
  
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enfim envie a documentação',
    price: '30',
    description: [
      'Sistema automatizado',
      'Atinja metas apenas usando o smartphone',
     
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    fontFamily:'Andale Mono, monospace',
  },
  div:{
    backgroundColor:'#00ACBA',
  },
  paper: {
    paddingBottom: 50,
  },
  card:{
     padding:10, 
     marginTop:10, 
     marginBottom:10,
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
        
        <Header/>
        <br></br>
        <br></br>
        <br></br>
      

      <CssBaseline />
        <Grid container>
        <div  width="100%" height="100%" style={{backgroundImage:`url(${Padeiro})`, marginTop:"-50px",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
        
        <Grid
            container
           direction="column"
           justify="space-around"
           alignItems="flex-end"
           xs={12} sm={6}
          >
            <img alt="logo"  width="45%" src={log}></img>
           <Paper elevation={3} style={{background:"linear-gradient(45deg, #00ACBA 40%, #FFFFFF 80%)", borderRadius:"100px", marginTop:"100px", marginBottom:"15px"}}>
           <Typography gutterBottom variant="h5" className={classes.text} component="h2">
           <Devices/>
           <b>Marketing e gestão</b>

              </Typography>
           </Paper>
           <Paper elevation={3} style={{background:"linear-gradient(45deg,#00ACBA 40%, #FFFFFF 80%)", borderRadius:"100px", marginTop:"20px", marginBottom:"15px"}}>
           <Typography gutterBottom variant="h5" className={classes.text} component="h2">
           <Devices />

           <b>Crédito superdigital</b>

              </Typography>
           </Paper>
           <Paper elevation={3} style={{background:"linear-gradient(45deg, #00ACBA 40%, #FFFFFF 80%)",borderRadius:"100px", marginTop:"20px", marginBottom:"15px"}}>
           <Typography gutterBottom variant="h5" className={classes.text} component="h2">
           <Devices />

           <b>O que falta para você crescer?</b>
              </Typography>
           </Paper>
        </Grid>
    
        </div>
        </Grid>
        <br></br>
        <br></br>
        <Container maxWidth="md" component="main" style={{marginBottom:"70px"}}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card > 
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div style={{background:'#00ACBA'}}>
         <Grid container>
           
            <Grid item xs={6}>
              <CardContent>
                      <Typography variant="h4">
                        Titulo 1
                      </Typography>
              </CardContent>
            
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h4">
                Titulo 2
              </Typography>
            </Grid>
            <Grid item xs={3} >
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            style={{marginTop:"15px", marginBottom:"15px", marginRight:"30px", maxWidth:"100%"}}
            image={aki}

            ></CardMedia>
            </Grid>
            </Grid>
            
          
      </div>
        
     
    </React.Fragment>
  );
}
