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
import axios from 'axios'
import useStyles from './styles';
import { Config } from '../../Config/Config'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const steps = ['Sign Up', 'Children Details', 'Submit your selection'];
const { formId, formField } = checkoutFormModel;

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [adultDetails, setAdultDetails] = useState([]);
  const [child, setChild] = useState([]);
  const router = useNavigate();

const [type, setType] = useState([]);
  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formField={formField} setType={setType} />;
      case 1:
        return <PaymentForm setChild={setChild} type={type} />;
      case 2:
        return <ReviewOrder setAdultDetails={setAdultDetails} />;
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
    await _sleep(3000);
    // alert('Details Submitted');
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
      // console.log(values);
      
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }
const myObj = {
    ...adultDetails,
    type,
    child
}
  const FinalSubmit = () => {
    console.log(myObj,'post values');


    axios
			.post(`${Config.url.API_URL}/user/registration`, myObj)
			.then((res) => {
				const userData = JSON.stringify({
					name: res.data
				          
				});
        console.log(userData);
				toast.success('Registered Successfully');
				// console.log(userData)
				router('/');
			})
			.catch((err) => {
				const errMsg = err?.response?.data?.message
					? err?.response?.data?.message
					: 'Failed to Register!';
				toast.error(errMsg);
				setLoading(false);
			});
  };
  return (
    <React.Fragment>
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
