import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {useSelector} from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyData from './meus_dados';
import MeusPlanos from './meus_planos';
import Taxas from './minhas_taxas';
import ReqAceitos from './req_aceitos';
import Locais from './localizacoes';
import {AccountCircle, AttachMoney, ShopTwo, SupervisedUserCircle, LocationCity} from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  indicator:{
    backgroundColor:'#00acba'


  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const esc = useSelector(state => state.esc.esc);
  const user = useSelector(state => state.usuario.user);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator
          }}
          variant="fullWidth"
          aria-label="full width tabs example"

        >
          {/* Meus dados */}
          <Tab  icon={<AccountCircle className={classes.icon}  

          />} {...a11yProps(0)}></Tab>
          {/* Minhas taxas */}
          <Tab icon={<AttachMoney className={classes.icon}           
          />} {...a11yProps(1)} />
          {/* NÃO IMPLEMENTADO */}
          {/* Meus planos */}
          {/* <Tab icon={<ShopTwo className={classes.icon} />} {...a11yProps(2)} /> */}


          {/* Requerentes Aceitos */}
          <Tab icon={<SupervisedUserCircle className={classes.icon} />} {...a11yProps(2)} />

          {/* Cidades de atntimento */}
          {/* NÃO IMPLEMENTADO */}

          {/* <Tab icon={<LocationCity className={classes.icon} />} {...a11yProps(4)} /> */}

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {user?<MyData/>:null}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {esc?<MeusPlanos/>:null}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ReqAceitos/>
        </TabPanel>
       
      </SwipeableViews>
    </div>
  );
}