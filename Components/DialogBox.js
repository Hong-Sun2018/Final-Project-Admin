import { Button } from '@mui/material';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog } from '../Redux/Reducer/DialogReducer';

const useStyles = makeStyles(
  {
    dialogBox: {
      width: '300px'
    },
  }
);

const DialogBox = () => {

  const classes = useStyles();
  const isOpen = useSelector((state) => state.dialog.value.isOpen);
  const message = useSelector((state) => state.dialog.value.dialogMsg);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDialog());
  }

  return (
    <Dialog
      open={isOpen} onClose={handleClose}
      fullWidth={true}
      maxWidth={'sm'}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title"></DialogTitle>
      <DialogContent>
        <DialogContentText>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Got It
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogBox;