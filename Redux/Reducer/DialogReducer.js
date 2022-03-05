import { createSlice } from '@reduxjs/toolkit';

export const dialogMessageSlice = createSlice(
  {
    name: 'dialog',
    initialState: {
      value: {
        dialogMsg: '',
        isOpen:false
      },
    },
    reducers: {
      setDialogMsg: (state, action) => {state.value = {dialogMsg:action.payload, isOpen: true}},
      closeDialog: (state, action) => {state.value.isOpen = false}
    }
  }
);

export const { setDialogMsg, closeDialog } = dialogMessageSlice.actions;
export default dialogMessageSlice.reducer;