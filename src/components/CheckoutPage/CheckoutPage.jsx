import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from './ReviewOrder';
import CheckoutSuccess from './CheckoutSuccess';
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['Sign Up', 'Children Details', 'Submit your selection'];
const { formId, formField } = checkoutFormModel;

export default function CheckoutPage() {
  const [formFinal, setFormFinal] = useState([]);
  const [getKid, setGetKid] = useState([]);
const [genderform, setGenderform] = useState([]);
  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formField={formField} setGenderform={setGenderform} />;
      case 1:
        return <PaymentForm setGetKid={setGetKid}  />;
      case 2:
        return <ReviewOrder setFormFinal={setFormFinal} />;
      default:
        return <div>Not Found</div>;
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert('Registration Completed');
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
      console.log(values);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  const FinalSubmit = () => {
    // console.log('e submit');
    
  };
  return (
    <React.Fragment>
      {console.log(formFinal, 'formfinal')}
      {console.log(getKid, 'getKid')}
      {console.log(genderform, 'genderform')}
      <Typography component="h1" variant="h4" align="center">
        Register
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? (
                        <>
                          {' '}
                          <Button onClick={FinalSubmit}> SUBMIT </Button>{' '}
                        </>
                      ) : (
                        'Next'
                      )}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
