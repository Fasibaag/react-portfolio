import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router-dom';

const styles = {
  card: {
    // maxWidth: 500,
    // width: '100%'
  },
};

function ProjectCard(props) {
  const {classes} = props;
  return (
    <Grid container spacing={24} alignContent='center' alignItems='center' justify='center'>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline" component="h2">
              Streamline Boats
            </Typography>
            <Typography component="p">
              I am currently building the interactive boat builder for this project.<br/>
              Built with React, Node, and Material-UI this is a website for a custom boat building company.
            </Typography>
          </CardContent>
          <CardActions>
            <Button onTouchTap={() => props.history.push('/projects/boat_builder')} color="inherit">Check it out!</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ProjectCard));