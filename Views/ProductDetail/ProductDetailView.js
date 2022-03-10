import { makeStyles } from "@mui/styles";
import { Box, Button, TextField, Typography, TextareaAutosize, Grid, Input } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, MenuItem, InputLabel, Select } from '@mui/material';
import API from "../../Constants/API";
import axios from "axios";
import { useRouter } from "next/router";

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'cennter'
    },
    container: {
      width: '50%',
      // backgroundColor: 'yellow',
    },
    contentWrapper: {
      background: '#ebebeb',
      marginTop: '12px',
      marginBottom: '50px',
      width:'100%'
    },
    imgContainer: {
      width: '225px',
      height: '150px',
      border: 'solid 1px',
      borderColor: '#aaaaaa',
      marginBottom: '12px',
      marginTop: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    image: {
      maxWidth: '225px',
      maxHeight: '150px',
    },
    buttonContainer: {
      width: '100%',
      textAlign: 'center',
      marginTop: '100px'
    }
  }
);

const ProductDetailView = ({ productID }) => {

  ////////////////////////////////// define States & Hooks ///////////////////////////
  // console.log(productID);

  const [catePath, setCatePath] = useState([]);

  const [prodName, setProdName] = useState('');
  const [prodPrice, setProdPrice] = useState(0);
  const [prodStock, setProdStock] = useState(0);
  const [prodDesc, setProdDesc] = useState('');

  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [prodCateID, setProdCateID] = useState(0);

  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  const clickEdit = () => {
    router.push(`/edit-product/${productID}`);
  }

  //////////////////////////////////Get Product By ID /////////////////////////////////////

  useEffect(() => {
    const url = `${API('Product')}/${productID}`;
    axios.get(url).then(res => {
      if (res && res.data) {
        setProdName(res.data.productName);
        setProdDesc(res.data.productDesc);
        setProdPrice(res.data.productPrice);
        setProdStock(res.data.productStock);
        setProdCateID(res.data.categoryID);
        setImg1(`data:${res.data.fileType1};base64,${res.data.file1}`);
        setImg2(`data:${res.data.fileType2};base64,${res.data.file2}`);
        setImg3(`data:${res.data.fileType3};base64,${res.data.file3}`);
      }
    }).catch(err => {
      console.log(err);
    })
  }, []);

  ////////////////////////////////// get pruduct categgory path /////////////////////////////
  useEffect(() => {
    if (prodCateID && prodCateID != 0){
      const url = `${API('GetCategoryPath')}?categoryID=${prodCateID}`;
      axios.get(url).then(res => {
        if (res && res.data) {
          //console.log(res.data);
          setCatePath(res.data);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }, [prodCateID])

  ////////////////////////////////////////////////////// Render ////////////////////////////////////////////////////
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>

        <Typography fontWeight={'bold'} variant={'p'} className={classes.inputTitle}>
          Product name:
        </Typography>
        <Box className={classes.contentWrapper} >
          <Typography variant={'p'} >{prodName}</Typography>
        </Box>
        <Typography fontWeight={'bold'} variant={'p'} className={classes.inputTitle}>
          Product price:
        </Typography>
        <Box className={classes.contentWrapper} >
          <Typography variant={'p'} >{prodPrice}</Typography>
        </Box>
        <Typography fontWeight={'bold'} variant={'p'} className={classes.inputTitle}>
          Product stock::
        </Typography>
        <Box className={classes.contentWrapper} >
          <Typography variant={'p'} >{prodStock}</Typography>
        </Box>
        <Typography fontWeight={'bold'} variant={'p'} className={classes.inputTitle}>
          Product description:
        </Typography>
        <Box className={classes.contentWrapper} >
          <Typography variant={'p'} >{prodDesc}</Typography>
        </Box>

        <Typography fontWeight={'bold'} variant={'p'} className={classes.inputTitle}>
          Product category:
        </Typography>
        <Box className={classes.contentWrapper}>
        <Grid className={classes.selectContainer} container alignItems={'center'} justifyContent={'space-between'}>
          {/*///////////////////////////////////////////////  Cate 1 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <Box>
              <Typography>{catePath[0] && `>> ${catePath[0].categoryName}`}</Typography>
            </Box>
          </Grid>
          {/*//////////////////////////////////////////////  Cate 2 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <Box>
              <Typography>{catePath[1] && `>> ${catePath[1].categoryName}`}</Typography>
            </Box>
          </Grid>
          {/*/////////////////////////  Cate 3 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <Box>
              <Typography>{catePath[2] && `>> ${catePath[2].categoryName}`}</Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
        <Typography fontWeight={'bold'} variant={'p'} className={classes.inputTitle}>
          Product pictures:
        </Typography>
        <Grid className={classes.selectContainer} container alignItems={'center'} justifyContent={'space-between'}>
          {/*/////////////////////////  Picture 1 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <Box className={classes.imgContainer}>
              <Box className={classes.image} component={'img'} src={img1}/>
            </Box>
          </Grid>
          {/*/////////////////////////  Picture 2 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <Box className={classes.imgContainer}>
              <Box className={classes.image} component={'img'} src={img2}/>
            </Box>
          </Grid>
          {/*/////////////////////////  Picture 3 ////////////////////////////////////////////*/}
          <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
            <Box className={classes.imgContainer}>
              <Box className={classes.image} component={'img'} src={img3}/>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.buttonContainer}>
          <Button onClick={clickEdit} variant={'contained'} sx={{ textTransform: 'none' }}>
            Edit This Product
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default memo(ProductDetailView);