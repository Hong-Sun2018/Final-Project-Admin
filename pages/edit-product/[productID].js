import { useRouter } from 'next/router';
import PageContainer from '../../Components/PageContainer';
import EditProductView from '../../Views/EditProduct/EditProductView';

const EditProduct = () => {

  const router = useRouter();
  const {productID} = router.query;
  // console.log(productID);

  return (
    <PageContainer pageTitle={'Edit Product'}>
      { productID != undefined && <EditProductView productID={productID} />}
    </PageContainer>
  );
}

export default EditProduct;