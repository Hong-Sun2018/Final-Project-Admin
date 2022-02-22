import { createSlice } from '@reduxjs/toolkit';

export const dialogOpenSlice = createSlice(
  {
    name: 'isDialogOpen',
    initialState: {
      value: false,
    },
    reducers: {
      openDialog: (state) => {state.value = true},
      closeDialog: (state) => {state.value = false}
    }
  }
);

export const { openDialog, closeDialog } = dialogOpenSlice.actions;

export default dialogOpenSlice.reducer;