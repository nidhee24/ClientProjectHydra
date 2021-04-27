import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    float: 'left',
    width: '30%',
    marginLeft: '3%',
    marginTop: '3%',
    height: '350px'
  },
  media: {
    height: 140,
  },
  description: {
    height: '70px'
  }
});

export default function Package(props) {
  const classes = useStyles();
  
  const deletePackage = async (id) => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/package/deletePackage',
        {id},
        config
      );
    } catch (e) {
      console.log('error ', e);
    }
  }
  
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.package.image1}
            title={props.package.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.package.name}
             
            </Typography>
            <Typography class={classes.description} variant="body2" color="textSecondary" component="p">
              {props.package.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={"package/" + props.package._id}>
          <Button size="small" color="primary">
            View Detail
          </Button>
          </Link>
          {localStorage.getItem('admin') && 
            <Button size="small" color="danger" onClick={()=>deletePackage(props.package._id)}>
              Delete
            </Button>
          }
        </CardActions>
      </Card>
    </div>
  );
}
