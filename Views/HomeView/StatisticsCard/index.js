import axios from "axios";
import API from "../../../Constants/API";
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState, useEffect, memo } from "react";
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root:{
    width: '100%',
  },
  container: {
    width: '200px',
    height: '250px',
    boxShadow: '5px 5px 5px #cccccc',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '30px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px',
    borderRadius: '10px',
    borderColor: '#cccccc'
  }
});

const StatisticsCard = ({type}) => {

  const classes = useStyles();
  const [number, setNumber] = useState(0);
  const router = useRouter();
  
  useEffect(() => {
    const url = `${API(type)}/get-total-number`;
    axios.get(url, {withCredentials: true}).then(res => {
      if (res && res.data){
        setNumber(res.data);
      }
    }).catch(err => {
      console.log(err);
    })
  }, []);

  const handleClick = () => {
    router.push(`/${type.toLowerCase()}s`);
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.container} >
        <Typography variant={'h6'} color={'gray'}>{`Number of ${type}s:`}</Typography>
        <Box sx={{width: '100%'}}>
          <hr />
        </Box>
        <Typography variant={'h3'} sx={{margin: '30px'}}>{number}</Typography>
        <Box sx={{width: '100%', margin: '10px'}}>
          <hr />
        </Box>
        <Button variant={'contained'} sx={{textTransform:'none'}} onClick={handleClick}>Manage</Button>
      </Box>
    </Box>
    
  );
}

export default memo(StatisticsCard);