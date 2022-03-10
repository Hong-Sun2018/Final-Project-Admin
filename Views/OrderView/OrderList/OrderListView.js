import { memo } from "react";
import { useEffect, useState } from 'react';
import API from '../../../Constants/API';
import axios from "axios";
import OrderCard from './OrderCard/OrderCard';
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

const OrderListView = () => {

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const url = API('OrderAllUsers');
    axios.get(url, {withCredentials: true}).then(res => {
      if (res && res.data){
        setOrderList(res.data);
      }
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <Box>
      {orderList.map((order, index) => {
        return (
          <OrderCard order={order} key={index} />
        );
      })}
    </Box>
  );
}

export default memo(OrderListView); 