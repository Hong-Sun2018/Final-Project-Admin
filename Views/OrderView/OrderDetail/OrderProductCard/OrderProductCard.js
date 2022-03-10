import { Box, Typography, Button, Grid, IconButton, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { memo} from 'react';

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
  },
  input: {
    width: '20px',
    height: '20px',
    lineHeight: '90%'
  },
  iconBtn: {
    width: '10px',
    height: '10px'
  }
});

const ProductCard = ({ product }) => {
  console.log(product)
  const classes = useStyles();
  const imgSrc = `data:${product.fileType1};base64,${product.file1}`;

  return (
    <Box className={classes.root} >
      <Grid container alignItems={'center'} justifyContent={'center'} spacing={4}>
        <Grid item md={2.5} sm={12} xs={12}>
          <Box className={classes.imgContainer} >
            <Box className={classes.image} component={'img'} src={imgSrc} />
          </Box>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Typography variant={'p'} md={{ textAlign: 'left' }} sm={{ textAlign: 'center' }}>{product.productName}</Typography>
        </Grid>
        <Grid item md={1.3} sm={12} xs={12}>
          <Typography color={'#cccccc'}>Price:</Typography>
          <Typography textAlign={'center'}>{product.productPris}</Typography>
        </Grid>
        <Grid item md={1.5} sm={12} xs={12}>
          <Typography color={'#cccccc'}>Quantity:</Typography>
          <Typography textAlign={'center'}>{product.productQuantity}</Typography>
        </Grid>
        <Grid item md={1.5} sm={12} xs={12}>
          <Typography color={'#cccccc'}>Sub Total:</Typography>
          <Typography textAlign={'center'}>{product.productQuantity * product.productPris}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(ProductCard);