import React,{useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import api from '../../services/api';
import {CircularProgress} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';







export default function Orders() {
  const [load, setLoad ] = useState(false);
  const [loans, setLoans] = useState([0]);


  useEffect(()=>{
    handleLoans()
  },[])
  
  
  async function handleLoans(){
    setLoad(true);
    try {
      const loa = await api.get('/esc/verRequisicoesAceitas', {headers:{'Authorization': localStorage.getItem('U_ID')}});
      var res = Object.values(loa.data);
      let res_filtred = res.filter((res)=>{
        return res.status === 3
      });
      setLoad(false);
      setLoans(res_filtred);
  
    } catch (error) {
      setLoad(false);
      console.log(error.response);
      
    }
  }

  return (
    <React.Fragment>
        <h2 style={{color:'#00acba', fontFamily:'Roboto, sans-serif'}}>Visão de devedores</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Valor</TableCell>
            <TableCell>Parcela</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {load && <CircularProgress color="inherit"/>}
          {loans.map((row) => (
            <TableRow key={row.emprestimoId}>
              <TableCell>{row.valor}</TableCell>
              <TableCell>1/{row.tempo}</TableCell>
              <TableCell>pendente</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* futura linkagem para visão geral */}
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver histórico de trâmites
        </Link>
      </div> */}
    </React.Fragment>
  );
}