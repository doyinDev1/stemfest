import React, { useState } from 'react'
import { ErrorMessage, FormInput, FormLabel, ModalContainer, ModalWrapper } from '../components/RegistrationModal/RegistrationModalComponent'
import { useField } from 'formik';
import * as Yup from 'yup';
// import { IoAdd, IoBalloonSharp } from "react-icons/io5";

import {
    FormikStepper,
    FormikStep,
    RadioField,
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

// const MyChildInput = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
//             <FormChildInput  {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <ErrorMessage>{meta.error}</ErrorMessage>
//             ) : null}
//         </>
//     );
// };

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

// const MyCheckbox = ({ children, ...props }) => {
//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//         <div>
//             <FormCheckLabel>
//                 <FormCheckInput type="checkbox" {...field} {...props} />
//                 {children}
//             </FormCheckLabel>

//             {meta.touched && meta.error ? (
//                 <ErrorMessage>{meta.error}</ErrorMessage>
//             ) : null}
//         </div>
//     );
// };

// const MySelect = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <div>
//             <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
//             <FormSelect {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <ErrorMessage>{meta.error}</ErrorMessage>
//             ) : null}
//         </div>
//     );
// };

const Register = () => {
    const onSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false); //// Important
    };

    const [kidsList, setKidsList] = useState([{ childName: "", gender: "", ageRange: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...kidsList];
        list[index][name] = value;
        setKidsList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...kidsList];
        list.splice(index, 1);
        setKidsList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setKidsList([...kidsList, { childName: "", gender: "", ageRange: "" }]);
    };


    return (
        <ModalContainer>
            <ModalWrapper>
                <FormikStepper
                    onSubmit={onSubmit}
                    initialValues={{
                        signee: '',
                        name: '',
                        email: '',
                        phone: '',
                        numberOfKids: '',
                        acceptedTerms: true,
                        childList: []
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
                        label="Step 1"
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

                    </FormikStep>
                    <FormikStep
                        label="Step 2"
                        labelColor='#fff'
                        withIcons="fa fa-user"
                        withNumbers
                        iconColor="white"
                        circleColor="danger">
                        {kidsList.map((x, i) => {
                            return (
                                <div style={{
                                    marginBottom: "5px",
                                    justifyContent: "center"
                                }}>
                                    <input required style={{ margin: 5 }} placeholder='Enter child name' type="text"
                                        name="childName"
                                        value={x.name}
                                        onChange={e => handleInputChange(e, i)}

                                    />
                                    <select required onChange={e => handleInputChange(e, i)}
                                        style={{ margin: 5 }} name="gender" id="gender">
                                        <option value="Gender">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <select required onChange={e => handleInputChange(e, i)}
                                        style={{ margin: 5 }} name="ageRange" id="ageRange">
                                        <option value="Age Range">Age Range</option>
                                        <option value="2-5">2-5</option>
                                        <option value="8-12">8-12</option>
                                        <option value="13-15">13-15</option>
                                    </select>
                                    <div style={{
                                        marginLeft: "10px",
                                        width: "200px",
                                        display: "inline-block"
                                    }}>
                                        {kidsList.length !== 1 && <button style={{
                                            background: "#013261", padding: "5px;", color: "#fff", marginRight: "10px"
                                        }} onClick={() => handleRemoveClick(i)}>Remove</button>}
                                        {(kidsList.length - 1 === i && kidsList.length !== 6) && <button style={{ background: "#013261", borderRadius: "2px", padding: "4px", color: "#fff" }} onClick={handleAddClick}>Add</button>}
                                    </div>
                                </div>
                            );
                        })}
                        {/* <div style={{ marginTop: 20, color: "#fff" }}>{JSON.stringify(kidsList)}</div> */}
                        {/* <div>
                            <MyChildInput
                                label="Child Name"
                                name="email"
                                type="email"
                                placeholder="name"
                            />
                        </div> */}
                    </FormikStep>
                </FormikStepper>
            </ModalWrapper>
        </ModalContainer >
    )
}

export default Register