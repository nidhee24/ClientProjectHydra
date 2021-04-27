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
      buttonDesign: {
          background: '#0A3F5C',
          color: '#FFF'
      }
}));