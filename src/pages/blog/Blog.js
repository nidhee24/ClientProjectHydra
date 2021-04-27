import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeForBlogPage from './ThemeForBlogPage'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1993&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Blog() {
  const classes = useStyles();

  return (
    <div className="Blog">
        <ThemeProvider theme={ThemeForBlogPage}>
        <AppBar className={classes.appBar } position="static">
        <Toolbar>
          <Typography variant="h6" color = "primary" >
            Travel Blog
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box className={classes.hero}>
        <Box>Travel Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1542704792-e30dac463c90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  title="Images"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Best Places to Visit in Toronto.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Toronto, the capital of Ontario, is the largest city in Canada and also one of the most diverse.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="data:image/jpeg;base64,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" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Jenil Soni
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Feb 28, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1581306764199-a9cc376310c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  title="Images"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Top 10 places to eat in London Ontario
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  London, Ontario has a thriving restaurant industry. From Italian to Thai food, there is something for every palette. For those with dietary restrictions, many of the restaurants, also, frequently include gluten-free and vegetarian options.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://lh3.googleusercontent.com/proxy/5CY99RV0V6TQQZac9b4FewzkYheOOu0RH0ebz5aK1PZGK03V-TqEOshRnKui3rNjpEh_TiRmdsUAxI88RjDdIA" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    Nithya Thayananthan
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Feb 14, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1600284536251-8bb98db53468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Best trails in Canada
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Ready to check out the best trails in Canada? AllTrails has 12,828 great hiking trails, trail running trails, mountain biking trails and more, with hand-curated trail maps and driving directions
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Emma Weston
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Sept 28, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  15 Best Beaches in Ontario
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  In the most populated areas of Ontario, summers are long, hot, and humid, and many residents flee the cities and head to the beach
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Sam Noman
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Dec 15, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default Blog;