import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, BrowserRouter } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AuthContext from '../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const auth = useContext(AuthContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {' '}
              <NavLink className="navBar" to="/allPackages">
                Packages
              </NavLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <NavLink className="navBar" to="/About">
                About
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink className="navBar" to="/Blog">
                Blog
              </NavLink>
            </MenuItem>

            
            <MenuItem onClick={handleClose}>
                <NavLink className="navBar" to="/Rooms">
                Hotel
              </NavLink>
            </MenuItem>
            
            <MenuItem onClick={handleClose}>
              <NavLink className="navBar" to="/Restaurant">
                Restaurant
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink className="navBar" to="/Activity">
                ACTIVITIES
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink className="navBar" to="/Career">
                CAREER
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink className="navBar" to="/Support">
                SUPPORT
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink className="navBar" to="/Deals">
                Deals
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink className="navBar" to="/Review">
                Review
              </NavLink>
            </MenuItem>
          </Menu>

          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink className="navBar" to="/">
              {' '}
              TravelAnyday...!!
            </NavLink>
          </Typography>
            {!localStorage.getItem('token') && (
            <NavLink
              className="navBar"
              to="/loginSignup"
            >
              Login
            </NavLink>
          )} 
          {localStorage.getItem('token') && (
            <NavLink
              className="navBar"
              to="/"
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('admin');
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              }}
            >
              Logout
            </NavLink>
          )} 

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
