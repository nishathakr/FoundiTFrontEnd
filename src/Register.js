import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <li  onClick={this.handleClickOpen}>
          Register
        </li>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
     <AppBar sx={{ position: 'relative', margin: '0px' }}>
  <Toolbar sx={{ bgcolor: '#ed563b' }}>
    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
      Sign Up
    </Typography>
   
    <IconButton
      edge="start"
      color="inherit"
      onClick={this.handleClose}
      aria-label="close"
    >
      <CloseIcon />
    </IconButton>
  </Toolbar>
</AppBar>

        
        </Dialog>
      </div>
    );
  }
}

export default Register;
