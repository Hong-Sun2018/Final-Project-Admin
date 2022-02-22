import { Hidden, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'right',
    }
  }
);



const NavBar = () => {

  const classes = useStyles();

  return (
    <Hidden smDown>
      <Box className={classes.root}>

      </Box>
    </Hidden>
  );


}