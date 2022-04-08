import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';

export default function ReviewOrder({ setAdultDetails }) {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Check Your Email After Submission for your Access and QR Code
      </Typography>
      <Grid container spacing={2}>
        {/* <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} /> */}
        {setAdultDetails(formValues)}
        {/* {console.log(formValues, 'fv')} */}
      </Grid>
    </React.Fragment>
  );
}
