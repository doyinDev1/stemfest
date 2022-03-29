import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" style={{color: '#ffc000'}} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          STEM FEST
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
