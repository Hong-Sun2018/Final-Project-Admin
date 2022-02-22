import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '150px',
      paddingBottom: '100px'
    },
    pageTitle: {
      marginBottom: '80px',
    }
  }
);

const PageContainer = ({children, pageTitle}) => {
  
  const classes = useStyles();

  return (
    <Box className={classes.root}> 
      <Typography className={classes.pageTitle} variant={'h2'}>
        {pageTitle}
      </Typography>
      {children}
    </Box>
  );
}

export default PageContainer;