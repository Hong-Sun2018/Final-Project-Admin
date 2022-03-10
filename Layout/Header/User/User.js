import { Box, Typography, Link, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../../Redux/Reducer/UserInfoReducer';
import { useRouter } from 'next/router';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Menu, MenuItem } from '@mui/material';
import API from '../../../Constants/API';
import axios from 'axios';

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
    },
  }
);

const SignIn = () => {
  return (
    <Link href={'/'}>
      <Button sx={{textTransform: 'none'}} >
        <Typography>
          Sign In
        </Typography>
      </Button>
    </Link>
  );
};

const UserMenu = ({username}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const dispatch = useDispatch();
  
  const handleClose = ()=> {
    setAnchorEl(null);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const signout = () => {
    setAnchorEl(null);
    const url = API('SignOut');
    axios.get(url, {withCredentials: true}).then(res => {
      if (res){
        dispatch(setUserInfo({}));
        router.reload();
      }
    }).catch(err => {
      console.log(err);
      dispatch(setDialogMsg('Unknow error.'));
    })
  }

  return (
    <>
      <Button id={'user-menu-btn'}
        aria-controls={open? 'user-menu' : undefined}
        aria-haspopup={'true'}
        aria-expanded={open? 'true' : undefined }
        onClick={handleClick}
        sx={{textTransform: 'none'}}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {username}
      </Button>
      <Menu id={'user-menu'}
        aria-labelledby={'user-menu-btn'}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal:'left',
        }}
      >
        <MenuItem onClick={signout} >Sign Out</MenuItem>
      </Menu>
    </>
  );
}

const User = () => {

  const classes = useStyles();
  const {userName, userID}= useSelector((state) => {return state.userInfo.value});
  const dispatch = useDispatch();
  
  return (
    <Box>
      { userName == '' ? <SignIn /> : <UserMenu username={userName}/>}
    </Box>
  )
}

export default memo(User);