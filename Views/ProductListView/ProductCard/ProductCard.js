import Image from "next/image";
import { Box, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Router, useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    width: '100%',
    // minWidth: '150px',
    padding: '10px',
    marginTop: '10px',
    boxShadow: '2px 2px 5px #cccccc'
  },
  imgContainer: {
    width: '150px',
    height: '100px',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  image: {
    maxHeight: '100px',
    maxWidth: '150px',
  },
  btnContainer: {
    minWidth: '150px'
  },
  btn: {
    textTransform: 'none',
    marginLeft: '10px',
  }
});

const ProductCard = ({ product }) => {

  const classes = useStyles();
  const router = useRouter();
  const imgSrc = `data:${product.fileType1};base64,${product.file1}`;
  // console.log(imgSrc);

  const clickEdit = () => {
    router.push(`/edit-product/${product.productID}`)
  }

  return (
    <Box className={classes.root} >
      <Grid container alignItems={'center'} justifyContent={'center'} spacing={4}>
        <Grid item md={3} sm={12} xs={12}>
          <Box className={classes.imgContainer} >
            <Box className={classes.image} component={'img'} src={imgSrc} />
          </Box>
        </Grid>
        <Grid item md={2.5} sm={12} xs={12}>
          <Typography variant={'p'} md={{ textAlign: 'left' }} sm={{ textAlign: 'center' }}>{product.productName}</Typography>
        </Grid>
        <Grid item md={1} sm={12} xs={12}>
          <Typography color={'#cccccc'}>Price:</Typography>
          <Typography textAlign={'center'}>{product.productPrice}</Typography>
        </Grid>
        <Grid item md={1} sm={12} xs={12}>
          <Typography color={'#cccccc'}>Stock:</Typography>
          <Typography textAlign={'center'} >{product.productStock}</Typography>
        </Grid>
        <Grid item md={4.5} sm={12} xs={12} textAlign={'center'}>
          <Box className={classes.btnContainer}>
            <Button className={classes.btn} variant={'contained'} size={'small'}>View</Button>
            <Button className={classes.btn} onClick={clickEdit} variant={'outlined'} size={'small'}>Edit</Button>
            <Button className={classes.btn} variant={'outlined'} color={'error'} size={'small'}>Delete</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductCard