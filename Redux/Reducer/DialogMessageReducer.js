import { createSlice } from '@reduxjs/toolkit';

export const dialogMessageSlice = createSlice(
  {
    name: 'dialogMessage',
    initialState: {
      value: '',
    },
    reducers: {
      setDialogMsg: (state, action) => {state.value = action.payload}
    }
  }
);

export const { setDialogMsg } = dialogMessageSlice.actions;
export default dialogMessageSlice.reducer;