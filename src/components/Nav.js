import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import CloudQueue from 'material-ui-icons/CloudQueue';
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%'
  },
  typography: {
    flex: 1,
  },
  CloudQueue: {
    marginLeft: -5,
    marginRight: 20,
  }
});

const Nav = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CloudQueue className={classes.CloudQueue}/>
          <Typography onTouchTap={() => props.history.push('/')} type="title" color="inherit" className={classes.typography}>
            Jacek Zarski - Software Developer
          </Typography>
          <Button onTouchTap={() => props.history.push('/')} color="inherit">About</Button>
          <Button onTouchTap={() => props.history.push('/projects')} color="inherit">Projects</Button>
          <Button onTouchTap={() => props.history.push('/contact')} color="inherit">Contact</Button>
          <Button href="https://github.com/zjacek12" color="inherit">Github</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Nav));