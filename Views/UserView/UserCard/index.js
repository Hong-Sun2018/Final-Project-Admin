import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    margin: '10px',
    marginLeft: '40px',
    marginRight: '40px'
  }
});

const UserCard = ({ user }) => {
  const classes = useStyles();
  const { userName, userID } = user;

  return (
    <Box sx={{ width: '100%',}}>
      <Box className={classes.root}>
        <Box className={classes.container}>
          <Typography color={'#cccccc'}>User ID: </Typography>
          <Typography>{userID}</Typography>
        </Box>
        <Box className={classes.container}>
          <Typography color={'#cccccc'}>Username:</Typography>
          <Typography>{userName}</Typography>
        </Box>
      </Box>
      <hr />
    </Box>
  );
}

export default memo(UserCard);
