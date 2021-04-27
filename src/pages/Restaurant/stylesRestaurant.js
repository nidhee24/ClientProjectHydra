import {makeStyles} from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    card: {
        maxWidth: '100%',
    },
    cardmedia: {
        height: 0,
        paddingTop: '10.25%',
        paddingLeft: '5.25%'
    },
    cardcontent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    dateField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: 250,
      },
      formStyle: {
          padding: theme.spacing(3),
      },
      gridStyle:{
          margin: theme.spacing(2)
      },
      design: {
          '& .MuiInputBase-input' :{
              margin: theme.spacing(1)
          }
      },
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
      buttonDesign: {
          background: '#0A3F5C',
          color: '#FFF'
      }
}));