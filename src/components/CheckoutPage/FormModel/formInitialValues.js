import checkoutFormModel from './checkoutFormModel';
const {
  formField: { name, phoneNumber, email }
} = checkoutFormModel;

export default {
  [name.name]: '',
  [phoneNumber.name]: '',
  [email.name]: '',
  
};
