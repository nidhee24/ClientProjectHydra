import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper1: {
    marginLeft: '140px',
    marginRight: '140px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: '100%',
    paddingTop: '20px',
    maxWidth: 345,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  background: {
    backgroundColor: '#dcedc8',
  },
  media: {
    height: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Activity() {
  const classes = useStyles();
  const [activity, setActivity] = React.useState('');

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <div className={classes.background}>
      <div className={classes.paper}>
        <div className={classes.paper1}>
          <Grid container spacing={1}>
            <Grid item xs={4} >
              <div className={classes.root}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image="/images/pic1.jpg" title="Contemplative Reptile" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">Meditation</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, 
                      thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={4} >
              <div className={classes.root}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image="/images/pic2.jpg" title="Contemplative Reptile" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">Games</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                       Various games related activities throughout the worl we can have booking for them. These can the  cricket matches or football.
                        We provide facility to arrage the whole trip for you.</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={4} >
              <div className={classes.root}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image="/images/pic3.jpg" title="Contemplative Reptile" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">Kayaking</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Kayaking is the use of a kayak for moving across water. 
                      It is distinguished from canoeing by the sitting position of the paddler and the number of blades on the paddle.
                       A kayak is a low-to-the-water legs in front, using a double-bladed paddle to pull front-to-back on one side and then the other in rotation.
                       </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={4} >
              <div className={classes.root}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image="/images/pic4.jpg" title="Contemplative Reptile" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">Trekking</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Opportunities for challenging hikes and pleasant strolls are scattered all over this planet; you just need to know where to find them. 
                      We do. Kilimanjaro, Everest Base Camp, Patagonia, and the Inca Trail are out there, waiting for you to walk all over them.
                       And if you’re not into big climbs, don’t sweat it; we’ve got loads of lower-impact walks and iconic treks you’ll love, too.</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={4} >
              <div className={classes.root}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image="/images/pic5.jpg" title="Contemplative Reptile" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">Skiing</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Skiing is a means of transport using skis to glide on snow. Variations of purpose include basic transport, a recreational activity, or a competitive winter sport.
                       Many types of competitive skiing events are recognized by the International Olympic Committee (IOC), and the International Ski Federation (FIS).</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={4} >
              <div className={classes.root}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image="/images/pic6.jpg" title="Contemplative Reptile" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">Snow Activities</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Skiing is a means of transport using skis to glide on snow. Variations of purpose include basic transport, a recreational activity, or a competitive wint
                      Many types of competitive skiing events are recognized by the International Olympic Committee (IOC), and the International Ski Federation (FIS).</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>

          </Grid>
        </div>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" autoFocus />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" />
              </Grid>
              <Grid item xs={12}>
              <TextField variant="outlined"  required fullWidth  id="email"  label="Email Address"  name="email"  autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined"  required fullWidth  id="phone"  label="Phone Number"  name="phone"  autoComplete="phone" />
            </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Activity</InputLabel>
                  <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={activity} onChange={handleChange}  label="Activity">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Meditation</MenuItem>
                    <MenuItem value={20}>Trekking</MenuItem>
                    <MenuItem value={30}>Skiing</MenuItem>
                    <MenuItem value={40}>Games</MenuItem>
                    <MenuItem value={50}>Snow Activity</MenuItem>
                    <MenuItem value={60}>Kayaking</MenuItem>

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive notification for future job prospects" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >  Sign Up </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}