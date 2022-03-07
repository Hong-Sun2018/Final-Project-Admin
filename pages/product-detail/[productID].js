import axios from "axios";
import { useRouter } from "next/router";
import PageContainer from "../../Components/PageContainer";
import ProductDetailView from "../../Views/ProductDetail/ProductDetailView";

const ProductDetail = () => {

  const router = useRouter();
  const {productID}= router.query;
  console.log(productID)

  return (
    <PageContainer pageTitle={'Product Detail'}>
      <ProductDetailView productID={productID} />
    </PageContainer>
  );
}

export default ProductDetail;