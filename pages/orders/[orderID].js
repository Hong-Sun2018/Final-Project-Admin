import PageContainer from "../../Components/PageContainer";
import OrderDetailView from "../../views/OrderView/OrderDetail/OrderDetailView";

const OrderDetailPage = () => {
  
  return (
    <PageContainer pageTitle={'Order Detail'}>
      <OrderDetailView />
    </PageContainer>
  );
}

export default OrderDetailPage;