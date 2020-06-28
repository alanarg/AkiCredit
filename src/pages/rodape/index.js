import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Grid} from '@material-ui/core';
import './css.css';
import face from './face.png';
import insta from './instaa.png';
import app from './Icons-App-Store-Google-play.png';
import linkedin from './logos.png';
import logo from './logotipo-AKi-azul.png';

const useStyles = makeStyles({
    root:{
       
        width:'100%',
        padding:'15px',
        // flexWrap:'wrap',
        justifyContent:'center',
        backgroundColor:'white'
    },
    paper:{
        paddingLeft:'50px',
        paddingRight:'50px',
        display:'flex',

        height:'30%',
        backgroundColor:'white'

    },
    grid:{
    },
    box:{
       width:'100%',
       
    },
    ul:{
        listStyle:'none',
    }

})




export default function Rodape(){
    const classes = useStyles();
    return <>
    <div className={classes.root}>
            <Grid container spacing={5}  justifyContent="center" alignItems="center" className={classes.grid}>
                <Grid item xs={12} sm={4}>
                    <div className={classes.box}>
                    <img src={logo} alt="" style={{width:'30%'}}></img>
                    <br></br>
                    <p >
                        <i>A aki credit é uma empresa facilitadora de negociações de crédito no ramo das empresas simples de crédito(ESC). 
                        Temos por objetivo auxiliar nas oferta e procura dos respectivos elementos polares, favor entrar em contato para sanar quaisquer dúvidas.</i>
                    </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div  className={classes.box}>
                <ul className={classes.ul}>
                        <li>
                      <div style={{display:'flex', padding:'5px'}}>
                         <img src={face} alt="akicredit_facebook" style={{width:'10%'}}></img>   
                        <a href="https://m.facebook.com/akicredit/" target="_blank" rel="noopener noreferrer"><p>Aki facebook</p></a>
                      </div>
                        </li>
                        <li>
                            
                      <div style={{display:'flex', padding:'5px'}}>

                            <img alt="akicredit_instagram" src={insta} style={{width:'10%'}}/>
                            <p>Aki instagram</p>
                        </div>
                        </li>
                        <li>
                      <div style={{display:'flex', padding:'5px'}}>

                            <img alt="akicredit_linkedin" src={linkedin} style={{width:'10%'}}/>
                            <p>Aki linkedin</p>
                        </div>
                        </li>
                        
                    </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div  className={classes.box}>
                <h4>Baixe o app</h4>

                <div style={{display:'flex', flexDirection:'column',margin:'0'}}>

                    <img src={app} alt="akicredit_app" style={{width:'50%', marginBottom:'5px'}}/>
                    
                    <p align="center">Segunda à Sábado das 06:00 às 19:00
                        Aki.Credit-Ajudar as ESC
                        Avenida Paulista 726

                        Bela Vista São Paulo-SP
                    </p>
                       <Typography align="center">(11) 3042-0055</Typography> 
                       
                </div>
                </div>
                </Grid>
                
            </Grid>
    </div>


    </>
}