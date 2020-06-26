import React from 'react';
import Header from '../Header';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Tabela from './tabela';
import UpdateEsc from '../Update/updateEsc';
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';
import Initial from './initial_config';
import { Container,Paper, Grid} from '@material-ui/core';




const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-star',
        borderRadius:'15px',
        marginTop:'30px',
        height:'100%',
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
        width:'100%',
        backgroundColor:'#00acba',
        color:'white',
        display:'flex',
        borderRadius:'15px',
        cursor:'pointer'

        

    },
    logoesc:{
        width:'100px',
        height:'100px',
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


const Usuario = ()=>{
    const classes = useStyles();    
    const esc = useSelector(state => state.esc.esc);

   
    //Quando for implementado o uso de avatares utilizaremos
    // function handleChange(e) {
    //     if(e.target.files[0]){
    //         console.log(e.target.files[0]);
    //         setFile(e.target.files[0]);

    //     }       
    // };

      //Verificar se o usuário é novo para começar com as primeiras configurações
    function verifyNew(){
        // if(user.user_logo){
        //     return setImage(URL.createObjectURL(user.user_logo.File));
        // }    
        if(esc.exists==="não"){
            return <Initial/>
        }

    }
   
    // async function handleUpload(){
    //     try{
            
    //        await api.patch('/esc/logo', file,{headers:{'Authorization': localStorage.getItem('U_ID')}} ).then(res=> console.log(res.data));
        

            
    //     }catch(error){
    //         return console.log(error.response);
    //     }
    // }
    return <>
            <div className={classes.root}>
            
            <Header/>
            <Container  className={classes.container}>
                <Grid container   spacing={1} >
                {/* <Grid item  xs={4}>
                <Paper className={classes.paper2}>

                    
                   <img src={file.File} alt="esc logo" width="200px" height="100px"/> 
                    
                </Paper>
                <label for="select"><LibraryAdd className={classes.select}/></label>
                <input type="file" id="select" onChange={handleChange} className={classes.btnimg}/>
               
                <button onClick={handleUpload} style={{width:'50px', height:'100px', backgroundColor:'#00acba'}}/>
                </Grid> */}
                <Grid item  xs >
                <UpdateEsc/>
                    <Paper className={classes.paper2}>
                        <Grid container>
                            <Grid item xs={6} style={{paddingTop:'50px', paddingBottom:'50px', paddingLeft:'20px'}}>
                                <h1 style={{ color:'#00acba'}}>R${esc.limiteDeCredito}</h1>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs style={{paddingTop:'10px'}}>
                                        <h1 style={{color:'green',marginBottom:'40px'}}><ArrowUpward className={classes.up}/>0</h1>
                                    </Grid>
                                    <Grid item xs style={{paddingTop:'10px'}}>
                                        <h1 style={{color:'red'}}><ArrowDownward className={classes.down}/>0</h1>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item  xs={12}>
                    <Tabela style={{display:'block'}}/>
                </Grid>
                </Grid>
                
            </Container>
            {verifyNew()}

            </div>
            
        </>

}


export default Usuario;