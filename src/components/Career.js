import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



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
    backgroundColor: 'lightblue',
  }
}));

export default function Career() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.background}>
      <div className={classes.paper}>
        <div className={classes.paper1}>
          <Grid container spacing={1}>
            <Grid item xs={12} >
              <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                    <Typography className={classes.heading}>JOB-1</Typography>
                    <Typography className={classes.secondaryHeading}> Project Manager</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Here in this particular role you will be managing team of developers. 
                      Should have experience of more than five years. And also some experience in project manangement.</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} >
              <div className={classes.root}>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header" >
                    <Typography className={classes.heading}>JOB-2</Typography>
                    <Typography className={classes.secondaryHeading}>Senior Developer</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Need experience in .net and bootstrap for front-end. Need experience for about 10 years.</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} >
              <div className={classes.root}>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                    <Typography className={classes.heading}>Job-3</Typography>
                    <Typography className={classes.secondaryHeading}>Receptionist</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography> For this particular role you will be handling Receptionists handle a variety of administrative support tasks,
                    including answering phones, receiving visitors, preparing meeting and training rooms, sorting and distributing mail, and making travel plans.  </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} >
              <div className={classes.root}>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                    <Typography className={classes.heading}>JOB-4</Typography>
                    <Typography className={classes.secondaryHeading}>Travel Agent</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      In this role you will be helping help individuals, groups, and business travellers
                      plan and organize their travel schedules, from purchasing tour packages to booking flights and hotels.
                      And previous experience for abot 10 years is required in the field.</Typography>
                  </AccordionDetails>
                </Accordion>
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
                <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive notification for future job prospects"/>
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