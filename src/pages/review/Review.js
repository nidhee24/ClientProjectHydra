import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const hotel = [
    {
    id:1,
    name:'SkyTower',
    Location: 'Toronto',
    },
    {
        id:2,
        name:'Courtyard',
        Location: 'etobiko',
        },
        {
            id:3,
            name:'HamiltonHouse',
            Location: 'Hamilton',
            },
]



const useStyles = makeStyles((theme) => ({
  
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
    height: "200px",
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
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
}));


export default function Career() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div >
        <Box className={classes.hero}>
        <Box>Review</Box>
      </Box>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <br></br>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" align="center">
            Add Review!
            
        </Typography><br></br><br></br>
          <form className={classes.form} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <TextField autoComplete="Name" name="Location" variant="outlined" required fullWidth id="name" label="Name" autoFocus />
              </Grid>
          

              <Grid item xs={12}>
              <Autocomplete
                id="Location"
                 options={hotel}
                 getOptionLabel={(option) => option.name} 
                 style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select hotel" variant="outlined" />}
                />
              </Grid>
                
              <Grid item  xs={12} className = {classes.root}>
              <h2>Give Rating:  </h2>
           <Rating 
  name="hover-feedback"
  value={value}
  precision={0.5}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  onChangeActive={(event, newHover) => {
    setHover(newHover);
  }}
/>
{value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
</Grid>

              <Grid item  xs={12}>
              <TextField
          id="review"
          label="Write a review."
          multiline
          rows={5}
          defaultValue=""
          variant="outlined"
        />
              </Grid>
              
              <Grid item xs={12}>
               
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >  Submit</Button>
            <Grid container justify="flex-end">
              
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}