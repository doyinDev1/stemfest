import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  // Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  FormLabel,
  RadioGroup
} from '@material-ui/core';

export default function RadioButtonField(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.checked);
  }

  return (
    <FormControl {...rest}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
      row
    aria-labelledby="gender"
    defaultValue="parent"
    name="gender1"
    onChange={_onChange}
  >
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={<Radio {...field}  />}
        label={label}
      />
       </RadioGroup>
      {_renderHelperText()}
    </FormControl>




  );
}
