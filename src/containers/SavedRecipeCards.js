import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Saved.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function SavedRecipeCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="list">
      <div className="card-container">
        <div className="card">
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Recipe Name"
              subheader="Date"
            />
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Recipe"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Brief Description
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button aria-label="see more">
                See More
              </Button>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Recipe Name"
          subheader="Date"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Recipe"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Brief Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="see more">
            See More
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
    </div>
  </div>
  );
}