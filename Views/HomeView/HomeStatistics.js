import { Grid, Box, Typography, Button } from "@mui/material";
import API from "../../Constants/API";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { useRouter } from 'next/router';
import { memo } from "react";
import StatisticsCard from "./StatisticsCard";

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"yellow"
  }
});

const HomeStatistics = () => {

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Grid container alignItems={'center'} justifyContent={'center'} spacing={8}>
          <Grid item md={4} sm={12} xs={12}>
            <StatisticsCard type={'Product'}/>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <StatisticsCard type={'Order'}/>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <StatisticsCard type={'User'}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default memo(HomeStatistics);