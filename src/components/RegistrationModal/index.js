import React, { useState } from 'react'
import { ErrorMessage, FormInput, FormSelect, FormLabel, FormCheckLabel, ModalCloseButton, ModalContainer, ModalContent, ModalHeader, ModalWrapper, FormCheckInput, FormSubmitButton } from './RegistrationModalComponent'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { IoAdd, IoBalloonSharp } from "react-icons/io5";
import {
    FormikStepper,
    FormikStep,
    InputField,
    CheckBoxField,
    RadioField,
    SelectField,
    FormikHelpers,
} from "formik-stepper";

const validationSchema = Yup.object().shape({
    signee: Yup.string()
        .oneOf(
            ['Parent', 'School', 'Teacher'],
            'select a role'
        )
        .required('Required'),
    name: Yup.string()
        .min(2, 'your name is too short')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    phone: Yup.number("").min(2, "incomplete number").required('Required'),
    numberOfKids: Yup.number().required('Number of Kids Required'),
    acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
})

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <FormInput  {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </>
    );
};

const MyNumberInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <FormInput {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </>
    );
};

// const MyRadiobox = ({ children, ...props }) => {
//     const [field, meta] = useField({ ...props, type: 'radio' });
//     return (
//         <FormRadioBlock>
//             <FormRadioLabel>
//                 <FormRadioButton type="radio" {...field} {...props} />
//                 {children}
//             </FormRadioLabel>
//             {meta.touched && meta.error ? (
//                 <ErrorMessage>{meta.error}</ErrorMessage>
//             ) : null}
//         </FormRadioBlock>
//     );
// };

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <FormCheckLabel>
                <FormCheckInput type="checkbox" {...field} {...props} />
                {children}
            </FormCheckLabel>

            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <FormSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </div>
    );
};

const RegistrationModal = ({ showModal, setShowModal }) => {

    const onSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false); //// Important
    };
    return (
        <>
            {showModal
                ?
                <ModalContainer>
                    <ModalWrapper showModal={showModal}>
                        <ModalCloseButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
                        <FormikStepper
                            onSubmit={onSubmit}
                            initialValues={{
                                signee: '',
                                name: '',
                                email: '',
                                phone: '',
                                numberOfKids: '',
                                acceptedTerms: true
                            }}
                            validationSchema={validationSchema}
                            labelsColor="secondary"
                            withStepperLine
                            nextBtnLabel="next"
                            prevBtnLabel="return"
                            submitBtnLabel="Done"
                            nextBtnColor="primary"
                            prevBtnColor="danger"
                            submitBtnColor="success"
                        >
                            <FormikStep
                                label="Personal Info"
                                labelColor='#fff'
                                withIcons="fa fa-user"
                                withNumbers
                                iconColor="white"
                                circleColor="danger"
                            >

                                <RadioField
                                    name="RadioField"
                                    label="Select a role"
                                    labelColor="#fff"
                                    options={[
                                        { label: "Parent", value: "Parent" },
                                        { label: "School", value: "School" },
                                        { label: "Teacher", value: "Teacher" },
                                    ]}
                                />
                                <MyTextInput
                                    label="Full Name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                />

                                <MyTextInput
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="you@awesome.com"
                                />
                                <MyNumberInput
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    placeholder="09012345678"
                                />
                                {/* <InputField name="name" label="Full Name"
                                    labelColor='#fff'></InputField>
                                <InputField name="email" label="Email" labelColor='#fff' />
                                <InputField name="phone" label="Phone"
                                    labelColor='#fff' /> */}
                            </FormikStep>
                            <FormikStep
                                label="Additional Info"
                                labelColor='#fff'
                                withIcons="fa fa-user"
                                withNumbers
                                iconColor="white"
                                circleColor="danger">
                                <SelectField
                                    label="select"
                                    name="signee"
                                    labelColor="#fff"
                                    placeholder="Select number of Kids"
                                    // isMulti
                                    options={[
                                        { value: "Parent", label: "Parent" },
                                        { value: "School", label: "School" },
                                        { value: "Teacher", label: "Teacher" },
                                    ]}
                                />
                                <div>
                                    <MyTextInput
                                        label="Name"
                                        name="email"
                                        type="email"
                                        placeholder="you@awesome.com"
                                    />
                                </div>
                            </FormikStep>
                        </FormikStepper>
                    </ModalWrapper>
                </ModalContainer>
                // <ModalContainer>
                //     <ModalWrapper showModal={showModal}>
                //         <ModalCloseButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
                //         <ModalContent>
                //             <ModalHeader>Register for stemfest!</ModalHeader>
                //             <Formik
                //                 initialValues={{
                //                     signee: '', // added to know what user is signing up as
                //                     name: '',
                //                     email: '',
                //                     phone: '',
                //                     numberOfKids: '',
                //                     acceptedTerms: true, // added for our checkbox
                //                 }}
                //                 validationSchema={validationSchema}
                //                 // validationSchema={Yup.object({
                //                 //     signee: Yup.string()
                //                 //         .oneOf(
                //                 //             ['Parent', 'School', 'Teacher'],
                //                 //             'select a role'
                //                 //         )
                //                 //         .required('Required'),
                //                 //     name: Yup.string()
                //                 //         .min(2, 'your name is too short')
                //                 //         .required('Required'),
                //                 //     email: Yup.string()
                //                 //         .email('Invalid email address')
                //                 //         .required('Required'),
                //                 //     phone: Yup.number().required('Required'),
                //                 //     numberOfKids: Yup.number().required('Number of Kids Required'),
                //                 //     acceptedTerms: Yup.boolean()
                //                 //         .required('Required')
                //                 //         .oneOf([true], 'You must accept the terms and conditions.'),
                //                 // })}
                //                 onSubmit={(values, { setSubmitting }) => {
                //                     setTimeout(() => {
                //                         alert(JSON.stringify(values, null, 2));
                //                         setSubmitting(false);
                //                     }, 400);
                //                 }}
                //             >
                //                 <Form autoComplete='off'>
                //                     <MySelect label="Select a role  " name="signee">
                //                         <option value="">Select a role</option>
                //                         <option value="Parent">Parent</option>
                //                         <option value="School">School</option>
                //                         <option value="Teacher">Teacher</option>

                //                     </MySelect>
                //                     <MyTextInput
                //                         label="Name"
                //                         name="name"
                //                         type="text"
                //                         placeholder="John Doe"
                //                     />

                //                     <MyTextInput
                //                         label="Email Address"
                //                         name="email"
                //                         type="email"
                //                         placeholder="you@awesome.com"
                //                     />
                //                     <MyNumberInput
                //                         label="Phone Number"
                //                         name="phone"
                //                         type="tel"
                //                         placeholder="09012345678"
                //                     />
                //                     <MyNumberInput
                //                         min="1" max="6"
                //                         label="Number of Children registering?"
                //                         name="number"
                //                         type="number"
                //                         placeholder="0"
                //                     />
                //                     <MyCheckbox name="acceptedTerms">
                //                         I accept the terms and conditions
                //                     </MyCheckbox>

                //                     <FormSubmitButton type="submit">Submit</FormSubmitButton>
                //                 </Form>
                //             </Formik>
                //         </ModalContent>
                //     </ModalWrapper>
                // </ModalContainer>

                : null}

        </>
    )
}

export default RegistrationModal