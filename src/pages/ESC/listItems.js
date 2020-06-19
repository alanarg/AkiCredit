import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import history from '../../history';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';


const useStyles = makeStyles({
  root:{
    color:'#fffff'
  }
})
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{color: '#ffff'}} fontSize="large" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" style={{color: '#ffff' }} />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={{color: '#ffff'}} fontSize="large" />
      </ListItemIcon>
      <ListItemText primary="Meus planos" style={{color: '#ffff'}}/>
    </ListItem> */}
    <ListItem button onClick={e => history.push("/requerentes")}>
      <ListItemIcon>
        <PeopleIcon style={{color: '#ffff'}} fontSize="large"/>
      </ListItemIcon>
      <ListItemText primary="Requerentes" style={{color: '#ffff'}}/>
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{color: '#ffff'}} fontSize="large"/>
      </ListItemIcon>
      <ListItemText primary="Em trânsito" style={{color: '#ffff'}}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{color: '#ffff'}} fontSize="large"/>
      </ListItemIcon>
      <ListItemText primary="Finalizados" style={{color: '#ffff'}}/>
    </ListItem> */}
  </div>
);
