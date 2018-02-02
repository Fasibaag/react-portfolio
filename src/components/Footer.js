import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  footer: {
    marginLeft: '12px',
    marginRight: '12px',
  },
  Typography: {
    color: '#FAFAFA'
  }
});


class Footer extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <footer className={classes.footer}>
          <Grid container direction="row">
            <Grid item xs={4}>
              <Grid container direction="column">
                <Grid item>
                  <Typography type='display1' className={classes.Typography}>
                    Jacek Zarski
                  </Typography>
                  <a href="mailto:jacek.zarski@rutgers.edu" className={classes.Typography}>
                    jacek.zarski@rutgers.edu
                  </a>
                </Grid>
                <Grid item>
                  <Typography paragraph className={classes.Typography}>
                    I am a full-stack software developer. I can help you build and grow your next product.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography paragraph className={classes.Typography}>
                    This website was made with React.js + Material-UI components.
                  </Typography>
                  <a href="https://github.com/zjacek12/react-portfolio">Source Code</a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4}>
              <Grid container direction="column">
                <Grid item>
                  <Typography type="header" className={classes.Typography}>
                    Social Links
                  </Typography>
                </Grid>
                <Grid item>
                  <div className="footer-social-networks">
                    <a href="https://twitter.com/jacekxd">
                      <i
                        className="fa fa-twitter footer-social-icons"
                        aria-hidden="true"
                      >
                        {' '}
                      </i>
                    </a>
                    <a href="https://instagram.com/zjacek12">
                      <i
                        className="fa fa-instagram footer-social-icons"
                        aria-hidden="true"
                      >
                        {' '}
                      </i>
                    </a>
                    <a href="https://www.linkedin.com/in/jacek-zarski-b0b522144/">
                      <i className="fa fa-linkedin-square footer-social-icons" aria-hidden="true">
                        {' '}
                      </i>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(Footer);