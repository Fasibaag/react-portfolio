import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import RecentWork from './RecentWork';
import Button from 'material-ui/Button';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container spacing={24} alignItems='center' justify='center' alignContent='center' direction="column">
        <Grid item>
          <Typography type="display2" gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item>
          <RecentWork/>
        </Grid>
        <Grid item>
          <Typography type="headline" align="center">
            Check out more of my projects on Github!
          </Typography>
        </Grid>
        <Grid item>
          <Button href="https://github.com/zjacek12" color="primary" raised>
            Github
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Projects;