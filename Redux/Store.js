import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from './Reducer/DialogReducer';
import userInfoReducer from './Reducer/UserInfoReducer';

const store = configureStore(
  {
    reducer   : {
      dialog: dialogReducer,
      userInfo: userInfoReducer,
    }
  }
);

export default store;