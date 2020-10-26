import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  sub:{
      flexGrow:1
  },
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'white',color:'black'}}>
          <IconButton edge="start" className={classes.menuButton} color="white" style={{color:'white'}} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <a href="/"><img src={require('../greency.png')} alt="logo" height="60"></img></a> 
          </Typography>
          <div className={classes.sub}>
          <Typography variant="subtitle1" gutterBottom>
          Taking care of your plant
            </Typography>
          </div>
          <div className={classes.sub2} style={{marginLeft:'10px'}}>
          <Button color="inherit" style={{color:'grey'}} href="/">Home</Button>
          <Button color="inherit" style={{color:'grey'}} href='/devices'>Devices</Button>
          <Button color="inherit" style={{color:'grey'}}>SIGNUP</Button>
          <Button color="inherit" style={{color:'grey'}}>signin</Button>
          
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}