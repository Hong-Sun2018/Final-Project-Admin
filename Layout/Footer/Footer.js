import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
      height: '200px',
      backgroundColor: '#EDEDED',
    }
  }
);

const Footer = () => {
  
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>
        Footer
      </Typography>
    </Box>
  );
}

export default Footer;