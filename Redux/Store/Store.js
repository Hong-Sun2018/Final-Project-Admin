import { configureStore } from '@reduxjs/toolkit';
import dialogOpenReducer from '../Reducer/DialogOpenReducer';
import dialogMessageReducer from '../Reducer/DialogMessageReducer';
import userInfoReducer from '../Reducer/UserInfoReducer';

const store = configureStore(
  {
    reducer   : {
      isDialogOpen: dialogOpenReducer,
      dialogMessage: dialogMessageReducer,
      userInfo: userInfoReducer,
    }
  }
);

export default store;