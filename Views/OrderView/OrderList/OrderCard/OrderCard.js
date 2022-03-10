import { useTabContext } from '@mui/base';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { memo } from 'react';
import API from '../../../../Constants/API';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '30px',
  },
  container: {
    textAlign:'left',
    marginLeft: '20px',
    marginRight: '20px'
  },
  btn: {
    textTransform: 'none'
  }
});

const OrderCard = ({order}) => {
  
  // console.log(order);
  const classes = useStyles();
  const { orderID, orderTime, totalAmount, userName} = order;
  const date = new Date(orderTime * 1000);

  const router = useRouter();
  const routeDetail = () => {
    router.push(`/orders/${orderID}`)
  }

  return (
    <>
    <Box className={classes.root} >
      <Box className={classes.container}>
        <Typography color={'#cccccc'}>Order ID:</Typography>
        <Typography>{orderID}</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography color={'#cccccc'}>User:</Typography>
        <Typography>{userName}</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography color={'#cccccc'}>Order Date:</Typography>
        <Typography>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography color={'#cccccc'}>Total Amount</Typography>
        <Typography>{totalAmount}</Typography>
      </Box>
      <Box className={classes.container}>
        <Button className={classes.btn} size={'small'} variant={'contained'} onClick={routeDetail}>View Detail</Button>
      </Box>
    </Box>
    <hr />
    </>
    
  );
}

export default memo(OrderCard);