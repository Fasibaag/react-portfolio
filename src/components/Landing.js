import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import RecentWork from './RecentWork';
import Skills from './Skills';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '100px'
  },
  img: {
    maxWidth: '200px',
    width: '100%',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: theme.palette.primary.main
  }
});


class Landing extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} direction="column" justify="center" alignItems="center">
          <Fade>
            <Grid item>
              <img src={require(`../assets/adi.jpg`)} className={classes.img} alt="Jacek Zarski"/>
            </Grid>
          </Fade>
          <Grid item>
            <Slide left>
              <Typography align="center" type="display1" gutterBottom>
                Hey, I am a software developer currently residing in New Jersey.
              </Typography>
            </Slide>
            <Slide left>
              <Typography align="center" type="subheading" gutterBottom>
                I design, build, operate, and maintain full-stack web applications, but most of all, I am a problem
                solver.
              </Typography>
              <Typography align="center" type="subheading" paragraph gutterBottom>I primarily work with React.js,
                Node.js,
                Express and
                MongoDB and many others but picking up
                new frameworks and languages is not a problem.
              </Typography>
            </Slide>
            <br/>
            <br/>
            <Divider light/>
            <br/>
            <br/>
          </Grid>
          <Grid item>
            <Slide left>
              <Typography type="display2" gutterBottom>
                Recent Work
              </Typography>
            </Slide>
          </Grid>
          <Grid item>
            <Slide left>
              <RecentWork/>
            </Slide>
            <br/>
            <br/>
            <Divider light/>
            <br/>
            <br/>
          </Grid>
          <Grid item>
            <Slide left>
              <Typography type="display2" gutterBottom>
                Skills
              </Typography>
            </Slide>
          </Grid>
          <Grid item>
            <Slide left>
              <Skills/>
            </Slide>
            <br/>
            <br/>
            <Divider light/>
            <br/>
            <br/>
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