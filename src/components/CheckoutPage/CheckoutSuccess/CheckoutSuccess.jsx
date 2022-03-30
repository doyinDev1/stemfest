import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for Registering.
      </Typography>
      <Typography variant="subtitle1">
        Your Details have been submitted, Kindly Check your email for your
        Access Code
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
