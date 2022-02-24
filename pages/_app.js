import Layout from '../Layout/Layout';
import { Provider } from 'react-redux';
import store from '../Redux/Store/Store';
import {Box} from '@mui/material';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
  
}

export default MyApp
