import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import history from '../../history';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';



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
