import checkoutFormModel from './checkoutFormModel';
const {
  formField: { name, phone, email }
} = checkoutFormModel;

export default {
  [name.name]: '',
  [phone.name]: '',
  [email.name]: '',
  
};
