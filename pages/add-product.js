import PageContainer from '../Components/PageContainer';
import AddProductView from '../Views/AddProduct/AddProductView';

const AddProduct = () => {

  return (
    <PageContainer pageTitle={'New Product'}>
      <AddProductView />
    </PageContainer>
  );
}

export default AddProduct;