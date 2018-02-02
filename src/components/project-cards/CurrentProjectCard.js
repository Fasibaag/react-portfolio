import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 500,
    width: '100%'
  },
};

function ProjectCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2">
            Streamline Boats
          </Typography>
          <Typography component="p">
            I am currently building the interactive boat builder for this project.<br />
            Built with React, Node, and Material-UI this is a website for a custom boat building company.
          </Typography>
        </CardContent>
        <CardActions>
          <Typography component="p">
            This website is currently in development.
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);