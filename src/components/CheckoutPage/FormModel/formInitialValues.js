import checkoutFormModel from './checkoutFormModel';
const {
  formField: { name, phoneNumber, email, parent, school, teacher }
} = checkoutFormModel;

export default {
  [name.name]: '',
  [phoneNumber.name]: '',
  [email.name]: '',
  [parent.name]: false,
  [school.name]: false,
  [teacher.name]: false
};
