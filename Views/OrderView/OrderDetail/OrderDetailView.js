import { memo, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import API from "../../../Constants/API";
import { Typography, Box, Grid } from "@mui/material";
import OrderProductCard from "./OrderProductCard/OrderProductCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  containerList: {
    width: '85%',
  },
  containerSummary: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'yellow'
  },
  subContain: {
    marginLeft: '20px',
    marginRight: '20px'
  }
});
const OrderDetailView = () => {

  const classes = useStyles();
  const router = useRouter();
  const { orderID } = router.query;
  const [orderProducts, setOrderProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userID, setUserID] = useState(0);
  const [userName, setUserName] = useState('');
  const [orderTime, setOrderTime] = useState(0);

  useEffect(() => {
    const url = `${API('OrderById')}?id=${orderID}`;
    axios.get(url, { withCredentials: true }).then(res => {
      if (res && res.data) {
        setOrderProducts(res.data.orderProdWithProdName);
        setUserID(res.data.userID);
        setUserName(res.data.userName);
        setOrderTime(res.data.orderTime);
        console.log(res.data)
        let temp = 0;
        for (const item of res.data.orderProdWithProdName) {
          temp = temp + item.productPris * item.productQuantity;
          console.logTemp;
        }
        setTotalPrice(temp);
      }
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.containerList}>
        <Grid container alignItems={'center'} justifyContent={'center'} spacing={3}>
          {orderProducts && orderProducts.map((item, index) => {
            return (
              <Grid item product={item} key={index} md={12} sm={6} xs={12}>
                <OrderProductCard product={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className={classes.containerSummary}>
        <Box>
          <Grid container alignItems={'center'} justifyContent={'center'} spacing={6}>
            <Grid item md={3} sm={6} xs={6}>
              <Typography variant={'h6'}>User ID:</Typography>
              <Typography variant={'h6'} fontWeight={'normal'}>{userID}</Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <Typography variant={'h6'}>Username:</Typography>
              <Typography variant={'h6'} fontWeight={'normal'}>{userName}</Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <Typography variant={'h6'}>Order Time:</Typography>
              <Typography variant={'h6'} fontWeight={'normal'}>{orderTime}</Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <Typography variant={'h6'}>Total Price:</Typography>
              <Typography variant={'h6'} fontWeight={'normal'}>{totalPrice}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default memo(OrderDetailView);