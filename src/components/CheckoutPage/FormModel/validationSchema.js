import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    name,
    phoneNumber,
    email,
    parent,
    teacher,
    school,
    country,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [phoneNumber.name]: Yup.number().required(
      `${phoneNumber.requiredErrorMsg}`
    ),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),

    [name.name]: Yup.string().required(`${name.requiredErrorMsg}`),
    [parent.name]: Yup.boolean().required(`${parent.requiredErrorMsg}`),
    [school.name]: Yup.boolean().required(`${school.requiredErrorMsg}`),
    [teacher.name]: Yup.boolean().required(`${teacher.requiredErrorMsg}`)
  })
];
