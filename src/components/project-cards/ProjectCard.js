import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

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
              LOOR.life
            </Typography>
            <Typography component="p">
              This application connects businesses with the community around them by posting offers in return for
              original content on instagram. <br/>
              Built with React.js, Node.js, Express.js, Mongo, this application shows you local offers based on your
              real time location.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.loor.life" dense color="primary">
              Business Side
            </Button>
            <Button href="https://protected-castle-26675.herokuapp.com/" dense color="primary">
              User Side (Mobile Only)
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);