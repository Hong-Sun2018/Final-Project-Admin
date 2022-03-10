import { memo, useState, useEffect } from "react";
import axios from "axios";
import API from "../../Constants/API";
import { makeStyles } from "@mui/styles";
import UserCard from "./UserCard";
import { Box } from '@mui/material';

const useStyles = makeStyles({
  root: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // background: 'red'
  }
});

const UserList = ({user}) => {

  const classes = useStyles();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const url = API('User');
    axios.get(url, {withCredentials: true}).then(res => {
      if (res && res.data){
        setUserList(res.data);
        console.log(res.data);
      }
    }).catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <Box className={classes.root}>
      {userList.map((item, index) => {
        return (
          <UserCard user={item} />
        );
      })}
    </Box>
  );
}

export default memo(UserList);