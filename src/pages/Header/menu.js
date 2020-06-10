import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import api from '../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/PowerSettingsNew';
import DraftsIcon from '@material-ui/icons/ViewQuilt';
import SendIcon from '@material-ui/icons/Home';
import Options from '@material-ui/icons/Apps';
import {useDispatch} from 'react-redux';

const StyledBack = withStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))(Backdrop);
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#00acba',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function SignOut(){
    localStorage.removeItem('U_ID')
    return history.push('/');
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleHome(){
       setOpen(true);
       history.push('/usuario');
       return setOpen(false);
  }

  return (
    
    <div>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{backgroundColor:'#00acba'}}
        onClick={handleClick}
      >
        <Options/>
      
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
     
        <StyledMenuItem onClick={handleHome}>
          <ListItemIcon>
              <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledMenuItem>
        <StyledMenuItem onClick={e => history.push('/esc')}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </StyledMenuItem>
        <StyledMenuItem onClick={SignOut}>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </StyledMenuItem>
      </StyledMenu>
 
    </div>
  );
}