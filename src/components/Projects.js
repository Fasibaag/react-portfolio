import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import RecentWork from './RecentWork';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container spacing={48} alignItems='center' justify='center' alignContent='center' direction="column">
        <Grid item>
          <Typography type="display2" gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item>
          <RecentWork/>
        </Grid>
      </Grid>
    );
  }
}

export default Projects;