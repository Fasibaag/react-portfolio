import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import RecentWork from './RecentWork';
import Skills from './Skills';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '100px'
  }
});

class Landing extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography type="display1" gutterBottom>
              Hey, I am a software developer currently residing in New Jersey.
            </Typography>
            <Typography type="subheading" gutterBottom>
              I design, build, operate, and maintain full-stack web applications, but most of all, I am a problem solver.
            </Typography>
            <Typography type="subheading" paragraph gutterBottom>I primarily work with React.js, Node.js, Express and
              MongoDB and many others but picking up
              new frameworks and languages is not a problem.
            </Typography>
            <br />
            <br />
            <Divider light/>
            <br />
            <br />
          </Grid>
          <Grid item>
            <Typography type="display2" gutterBottom>
              Recent Work
            </Typography>
          </Grid>
          <Grid item>
            <RecentWork/>
          </Grid>
          <Grid item>
            <Typography type="display2" gutterBottom>
              Skills
            </Typography>
          </Grid>
          <Grid item>
            <Skills/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(Landing));