import React from 'react';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

const customizedSnackbar = () => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={true}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handelClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfuly ceated.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default customizedSnackbar;
