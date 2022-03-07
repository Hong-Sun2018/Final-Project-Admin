import { Box, IconButton, Grid, InputBase, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { memo, useEffect, useState } from 'react';
import API from '../../Constants/API';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { FormControl, MenuItem, InputLabel, Select } from '@mui/material';
import ProductCard from './ProductCard/ProductCard';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  subTitle: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    marginBottom: '30px',
  },
  searchContainer: {
    width: '85%',
    boxShadow: '2px 2px 5px #cccccc',
    border: 'solid 1px',
    borderColor: '#cccccc',
    padding: '60px',
    // backgroundColor: 'blue'
  },
  selectContainer: {
    width: '100%',
    // backgroundColor: 'red'
  },
  select: {
    width: '100%',
  },
  searchBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '12px',
    border: 'solid 1px',
    borderRadius: '5px',
    paddingLeft: '5px',
  },
  listContainer: {
    width: '85%',
    boxShadow: '2px 2px 5px #cccccc',
    padding: '60px',
    marginTop: '40px',
    minHeight: '500px',
    // border: 'solid 1px',
    borderColor: '#cccccc',
  }

});

const getChildrenCate = (parentID, setCateList) => {
  const url = `${API('GetCategories')}/${parentID}`;
  axios.get(url).then((res) => {
    // console.log(url);
    if (res && res.data) {
      setCateList(res.data);
    }
  }).catch((err) => {
    console.log(err);
  });
}

const ProductList = () => {

  const classes = useStyles();
  const [category1, setCategory1] = useState({ categoryName: '' });
  const [category2, setCategory2] = useState({ categoryName: '' });
  const [category3, setCategory3] = useState({ categoryName: '' });
  const [cateList1, setCateList1] = useState({});
  const [cateList2, setCateList2] = useState({});
  const [cateList3, setCateList3] = useState({});
  const [disableCate2, setDisableCate2] = useState(true);
  const [disableCate3, setDisableCate3] = useState(true);
  const [keyWords, setKeyWords] = useState('');
  const [prodList, setProdList] = useState({});

  useEffect(() => {
    getChildrenCate(-1, setCateList1);
  }, []);

  useEffect(() => {
    if (category1 && category1.categoryID) {
      getChildrenCate(category1.categoryID, setCateList2);
    }
    getProducts();
  }, [category1]);

  useEffect(() => {
    if (category2 && category2.categoryID) {
      getChildrenCate(category2.categoryID, setCateList3);
    }
  }, [category2]);

  const router = useRouter();
  const routeNewProduct = () => {
    router.push('/add-product');
  }

  const changeCate1 = (event) => {
    setCategory1(cateList1.find(c => c.categoryName == event.target.value));
    setDisableCate2(false);
    setDisableCate3(true);
    setCategory2({});
    setCategory3({});
  }
  const changeCate2 = (event) => {
    setCategory2(cateList2.find(c => c.categoryName == event.target.value));
    setDisableCate3(false);
    setCategory3({});
  }
  const changeCate3 = (event) => {
    setCategory3(cateList3.find(c => c.categoryName == event.target.value))
  }
  const changeKeyWorks = (event) => {
    setKeyWords(event.target.value);
  }

  function getCategoryID() {
    const retVal = {};
    if (category3 && category3.categoryID) {
      retVal = category3.categoryID;
    }
    else if (category2 && category2.categoryID) {
      retVal = category2.categoryID;
    }
    else if (category1 && category1.categoryID) {
      retVal = category1.categoryID
    }
    else {
      retVal = 0;
    }
    return retVal;
  }

  function getKeyWords() {
    if (!keyWords || keyWords.length == 0) {
      return 'UndefinedKeyWord';
    }
    else {
      return keyWords;
    }
  }
  const clickSearch = () => {
    getProducts();
  }

  const keyDown = (event) => {
    // console.log(event.keyCode);
    if (event.keyCode == 13) {
      getProducts;
    }
  }


  //////////////////////////////////////////////// Get Product List /////////////////////////////////////////////////

  const getProducts = () => {
    const url = `${API('Product')}/${getCategoryID()}/${getKeyWords()}`;
    console.log(url);
    axios.get(url).then((res) => {
      console.log(res.data)
      if (res && res.data) {
        setProdList(res.data);
      }
    }).catch((err) => {
      console.log(err);
    })
  }


  ///////////////////////////////////////////////// Render //////////////////////////////////////////////////////////
  return (
    <Box className={classes.root}>
      {/*/////////////////////////////////////////// Search bar /////////////////////////////////////////////////////// */}
      <Box className={classes.searchContainer}>
        <Typography className={classes.subTitle} variant={'h6'}>Search Product</Typography>
        <Grid className={classes.selectContainer} container alignItems={'center'} justifyContent={'space-between'}>
          {/*///////////////////////////////////////////////  Cate 1 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <FormControl variant={'standard'} className={classes.select}>
              <InputLabel id={'category1-label'} >Select Category</InputLabel>
              <Select labelId={'category1-label'} id={'category1'} value={category1.categoryName} onChange={changeCate1}>
                {cateList1.length > 0 && cateList1.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.categoryName}>{item.categoryName}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          {/*//////////////////////////////////////////////  Cate 2 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <FormControl variant={'standard'} className={classes.select}>
              <InputLabel id={'category1-label'} >Select Category</InputLabel>
              <Select labelId={'category1-label'} id={'category2'} value={(category2 && category2.categoryName) ? category2.categoryName : ''} onChange={changeCate2} disabled={disableCate2}>
                {cateList2.length > 0 && cateList2.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.categoryName}>{item.categoryName}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          {/*/////////////////////////  Cate 3 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <FormControl variant={'standard'} className={classes.select}>
              <InputLabel id={'category1-label'} >Select Category</InputLabel>
              <Select labelId={'category1-label'} id={'category3'} value={(category3 && category3.categoryName) ? category3.categoryName : ''} onChange={changeCate3} disabled={disableCate3}>
                {cateList3.length > 0 && cateList3.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.categoryName}>{item.categoryName}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box className={classes.searchBar}>

          <InputBase fullWidth placeholder={'Searching Key Words'} onChange={changeKeyWorks} onKeyDown={keyDown} value={keyWords} />
          <IconButton onClick={clickSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* ////////////////////////////// Product List Display /////////////////////////////////////// */}
      <Box className={classes.listContainer}>
        <Grid container spacing={4}>
          <Typography className={classes.subTitle} variant={'h6'}>Product List</Typography>
          <Box sx={{width: '100%', display: 'flex', justifyContent:'right'}}>
            <Button variant={'contained'} size={'small'} onClick={routeNewProduct}>New Product</Button> 
          </Box>
          {prodList && prodList.length > 0 && prodList.map((item, index) => {
            return (
              <Grid item key={index} md={12} sm={6} xs={12}>
                <ProductCard product={item} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default memo(ProductList);