import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    name,
    phone,
    email
  }
} = checkoutFormModel;

export default [
  Yup.object().shape({
    [phone.name]: Yup.number().required(
      `${phone.requiredErrorMsg}`
    ),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [name.name]: Yup.string().required(`${name.requiredErrorMsg}`)
  })
];
