import PageContainer from '../Components/PageContainer';
import ProductList from '../Views/ProductListView/ProductList';

const Products = () => {


  return(
    <PageContainer pageTitle={'Products'}>
      <ProductList />
    </PageContainer>
  );
}

export default Products;