import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
  InputField
} from '../../FormFields';
import { useState } from 'react';


export default function AddressForm(props) {
  const {
    formField: { name, email, phone }  ,  setType
  
  
  } = props;
 
  const [gender, setGender] = useState("Paren");
  function onChangeValue(event) {
    setGender(event.target.value);
    // console.log(event.target.value)
  }
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
            name={phone.name}
            label={phone.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>

<div onChange={onChangeValue} style={{fontSize: '19px'}}>

<input type="radio" value="Parent" name="gender" checked={gender === "Parent"}/> Parent {''}{''}{''}
    
<input  type="radio" value="School" name="gender" checked={gender === "School"}/> School {''}{''}{''}
    
<input type="radio" value="Teacher" name="gender" checked={gender === "Teacher"}/> Teacher {''}{''}{''}

</div>
</Grid>
{setType(gender)}

      </Grid>
    </React.Fragment>
  );
}
