import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import ProjectCard from './project-cards/ProjectCard';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '100px'
  }
});

class RecentWork extends Component {
  render() {
    return (
      <ProjectCard/>
    );
  }
}

export default withRouter(withStyles(styles, {withTheme: true})(RecentWork));