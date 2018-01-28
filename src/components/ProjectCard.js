import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 1000,
  },
};

function ProjectCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require(`../assets/logo-trans.png`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            LOOR
          </Typography>
          <Typography component="p">
            This application connects businesses with the community around them by posting offers in return for original content on instagram. <br />
            Built with React.js, Node.js, Express.js, Mongo, this application shows you local offers based on your real time location.
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
    </div>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);