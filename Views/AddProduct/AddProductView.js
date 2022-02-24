import { makeStyles } from "@mui/styles";
import { Box, Button, TextField, Typography, TextareaAutosize, Grid, Input} from '@mui/material';
import { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, MenuItem, InputLabel, Select } from '@mui/material'; 
import GetUrl from "../../Constants/API";
import axios from "axios";
import { setDialogMsg } from "../../Redux/Reducer/DialogMessageReducer";
import { openDialog } from "../../Redux/Reducer/DialogOpenReducer";
import { setUserInfo } from "../../Redux/Reducer/UserInfoReducer";

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'cennter'
    },
    container: {
      width: '50%',
      // backgroundColor: 'yellow',
    },
    prodName : {
      marginBottom: '40px',
    },
    textArea: {
      width: '99.5%', 
      marginBottom: '40px',
    },
    selectContainer: {
      width: '100%',
      // backgroundColor: 'yellow',
    },
    select: {
      width: '100%',
    },
    newCategoryBox: {
      width: '100%',
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      // backgroundColor: 'yellow'
    },
  }
);

const AddProductView = () => {
  
  const classes = useStyles();
  const [category1, setCategory1] = useState({});
  const [category2, setCategory2] = useState({});
  const [category3, setCategory3] = useState({});
  const [categoryName1, setCategoryName1] = useState('');
  const [categoryName2, setCategoryName2] = useState('');
  const [categoryName3, setCategoryName3] = useState('');
  const dispatch = useDispatch();

  const postCategory = (url, body) => {
    console.log(url);
    console.log(body);
    axios.post(url, body).then((res) => {
      dispatch(setDialogMsg('New category created'));
      dispatch(openDialog);
  
    }).catch(err => {
      if (err.response && err.response.status == 401){
        dispatch(setDialogMsg('Invalid login or login expired.'));
        dispatch(openDialog());
        dispatch(setUserInfo({}));
      } 
      else {
        dispatch(setDialogMsg('Unknown error. '));
        dispatch(openDialog());
      }
    })
  }
  
  const changeCate1 = (event) => {
    setCategory1(event.target.value);
  }
  const changeCate2 = (event) => {
    setCategory2(event.target.value);
  }
  const changeCate3 = (event) => {
    setCategory3(event.target.value)
  }
  const changeCateName1 = (event)=>{
    setCategoryName1(event.target.value);
  }
  const changeCateName2 = (event)=>{
    setCategoryName1(event.target.value);
  }
  const changeCateName3 = (event)=>{
    setCategoryName1(event.target.value);
  }

  const getReqBody = {
    body1: {
      CategoryName: categoryName1,
      ParentID: -1
    },
    body2: {
      CategoryName: categoryName2,
      ParentID: category1.categoryID
    },
    body3: {
      CategoryName: categoryName3,
      ParentID: category2.categoryID
    }
  }

  const urlCreateCategory = GetUrl('CreateCategory');

  const createCategory1 = () => {   
    const reqBody = getReqBody['body1'];
    postCategory(urlCreateCategory, reqBody);
  }

  const createCategory2 = () => {
    const reqBody = getReqBody['body2'];
    postCategory(urlCreateCategory, reqBody);
  }

  const createCategory3 = () => {
    const reqBody = getReqBody['body3'];
    postCategory(urlCreateCategory, reqBody);
  }


  return (
    <Box className={classes.root}>
      <Box className={classes.container}>

        <Typography variant={'p'} >
          Product name:
        </Typography>
        <TextField className={classes.prodName} label={'Product name'} id={'prodName'} variant={'outlined'} fullWidth size={'small'}/>

        <Typography variant={'p'} >
          Product description:
        </Typography>
        <TextareaAutosize className={classes.textArea} placeholder={'Empty'} maxRows={10} minRows={10}/>

        <Typography variant={'p'} >
          Product category:
        </Typography>
        <Grid className={classes.selectContainer} container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <FormControl variant={'standard'} className={classes.select}>
              <InputLabel id={'category1-label'} >Select Category</InputLabel>
              <Select labelId={'category1-label'} id={'category1'} value={category1.categoryName} onChange={changeCate1}>
                <MenuItem>Computer</MenuItem>
              </Select>
            </FormControl>
            <Box className={classes.newCategoryBox}>
              <TextField variant={'filled'} label={'Create new category: '} fullWidth size={'small'} onChange={changeCateName1}/>
              <Button  onClick={createCategory1}>Submit</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <FormControl variant={'standard'} className={classes.select}>
              <InputLabel id={'category1-label'} >Select Category</InputLabel>
              <Select labelId={'category1-label'} id={'category1'} value={category1.categoryName} onChange={changeCate2}>
                <MenuItem>Computer</MenuItem>
              </Select>
            </FormControl>
            <Box className={classes.newCategoryBox}>
              <TextField variant={'filled'} label={'Create new category: '} fullWidth size={'small'} onChange={changeCateName2}/>
              <Button onClick={createCategory2}>Submit</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <FormControl variant={'standard'} className={classes.select}>
              <InputLabel id={'category1-label'} >Select Category</InputLabel>
              <Select labelId={'category1-label'} id={'category1'} value={category1.categoryName} onChange={changeCate3}>
                <MenuItem>Computer</MenuItem>
              </Select>
            </FormControl>
            <Box className={classes.newCategoryBox}>
              <TextField variant={'filled'} label={'Create new category: '} fullWidth size={'small'} onChange={changeCateName3}/>
              <Button  onClick={createCategory3}>Submit</Button>
            </Box>
          </Grid>
        </Grid>


      </Box>
    </Box>
  );
}

export default memo(AddProductView);