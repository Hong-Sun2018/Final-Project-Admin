import { Box, Typography, Link, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../../Redux/Reducer/UserInfoReducer';

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
    },
  }
);

const SignIn = () => {
  return (
    <Link href={'/signin'}>
      <Button sx={{textTransform: 'none'}} >
        <Typography>
          Sign In
        </Typography>
      </Button>
    </Link>
  );
};

const UserMenu = ({username}) => {

  return (
    <>
      {username}
    </>
  );
}

const User = () => {

  const classes = useStyles();
  const {userName, userID}= useSelector((state) => {return state.userInfo.value});
  const dispatch = useDispatch();
  
  return (
    <Box>
      { userName == '' ? SignIn() :  UserMenu({username: userName})}
    </Box>
  )
}

export default memo(User);