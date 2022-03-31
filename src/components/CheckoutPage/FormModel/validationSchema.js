import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    name,
    phoneNumber,
    email
  }
} = checkoutFormModel;

export default [
  Yup.object().shape({
    [phoneNumber.name]: Yup.number().required(
      `${phoneNumber.requiredErrorMsg}`
    ),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [name.name]: Yup.string().required(`${name.requiredErrorMsg}`)
  })
];
