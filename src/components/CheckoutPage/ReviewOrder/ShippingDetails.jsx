import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { name, email, phoneNumber, parent, school, teacher } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>{`${name}`}</Typography>
      <Typography gutterBottom>{`${phoneNumber}`}</Typography>
      <Typography gutterBottom>{`${email}`}</Typography>
      <Typography gutterBottom>{`${parent}`}</Typography>
      <Typography gutterBottom>{`${school}`}</Typography>
      <Typography gutterBottom>{`${teacher}`}</Typography>
    </Grid>
  );
}

export default PaymentDetails;
