import Layout from '../Layout/Layout';
import { Provider as StoreProvider} from 'react-redux';
import store from '../Redux/Store';
import LoginProvider from '../Components/LoginProvider';
import {Box} from '@mui/material';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider store={store}>
      <LoginProvider>
        <Layout>
          <Box sx={{ boxShadow: 3, marginBottom: '4px' }}>
            <Component {...pageProps} />
          </Box>
        </Layout>
      </LoginProvider>
    </StoreProvider>
  );
  
}

export default MyApp
