import Image from "next/image";
import { Box, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: '100%',
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
    maxHeight: '150px',
    maxWidth: '100px',
  },
});

const ProductCard = ({ product }) => {

  const classes = useStyles();
  const imgSrc = `data:${product.fileType1};base64,${product.file1}`;
  // console.log(imgSrc);

  return (
    <Box className={classes.root} >
      <Grid container alignItems={'center'} justifyContent={'center'} spacing={2}>
        <Grid item md={3} sm={12} xs={12}>
          <Box className={classes.imgContainer} >
            <Box className={classes.image} component={'img'} src={imgSrc} />
          </Box>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
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
        <Grid item md={3} sm={12} xs={12} textAlign={'center'}>
          <Button >Edit</Button>
          <Button >Delete</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductCard