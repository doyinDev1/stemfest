import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
  InputField,
  CheckboxField,
  RadioButtonField,
  SelectField
} from '../../FormFields';

export default function AddressForm(props) {
  const {
    formField: { name, email, phoneNumber, parent, school, teacher }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Register Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={name.name} label={name.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={phoneNumber.name}
            label={phoneNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CheckboxField name={parent.name} label={parent.label} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CheckboxField name={school.name} label={school.label} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CheckboxField name={teacher.name} label={teacher.label} />
        </Grid>
        {/* <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
          <CheckboxField
            name={chooseLabelType.name}
            label={chooseLabelType.label}
          />
           <CheckboxField
            name={chooseLabelType.name}
            label={chooseLabelType.label}
          />
        </Grid> */}
        {/* {console.log(props)} */}
      </Grid>
    </React.Fragment>
  );
}
