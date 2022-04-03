import React from "react";
import classes from "../styles/Login.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
// import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Config } from '../../Config/Config';
// import Loader from '../Loader/Loader';
// import SpinnerCustom from '../CommonForm/SpinnerCustom/SpinnerCustom';


const validationSchema = Yup.object().shape({
	email: Yup.string().required('Your Email is required').email('Please enter a valid email'),
	access_code: Yup.string().required('Access Code is required'),
	// access_code: Yup.string().required('Access code is required'),
});

function AdultLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
});

  const onUserFormSubmit = (data) => {
    const myFormData = {
        email: data.email,
        employee_id: data.employee_id,
        // firstLogin: data.employee_id,
    };
    setLoading(true);

    // axios
    // 	.post(`${Config.url.API_URL}/admin/login`, myFormData)
    // 	.then((res) => {
    // 		const userData = JSON.stringify({
    // 			token: res.data.data.token,
    // 		});

    // 		if (typeof sessionStorage !== undefined) {
    // 			sessionStorage.setItem('cpAdmin', userData);
    // 		}

    // 		toast.success('Login Successfully');

    // 		if (res.data.facilitator) {
    // 			return router.replace('/facilitator');
    // 		}
    // 		router.replace('/admindashboard');
    // 		// console.log(res.data.data.token);
    // 	})
    // 	.catch((err) => {
    // 		const errMsg = err?.response?.data?.message
    // 			? err?.response?.data?.message
    // 			: 'Failed to Login!';
    // 		toast.error(errMsg);
    // 		setLoading(false);
    // 	});
  };
  // console.log("hj");

  return (
    <>
      <div className={classes.image}>
        <div className={classes.overlay}>
          <div className={classes.LoginTypem}>
            <div className={classes.body}>
              <section className={classes.login} id="login">
                <div className={classes.Lorem}>
                  <img
                    src="https://res.cloudinary.com/naijakids/image/upload/v1648719539/9ijakids_f4hwlq.webp"
                    alt="Acesss"
                    width={200}
                    height={200}
                  />
                </div>
                <div className={classes.head}>
                  <h1 className={classes.company}>STEMFEST</h1>
                </div>
                <div className={classes.form}>
                <form
                    onSubmit={handleSubmit(onUserFormSubmit)}
                    className={classes.FormWidth}
                  >
                      	<label htmlFor="email">Email:</label>
						<br />
                 	<input
							type="text"
							placeholder="Email"
                            className={classes.password}
							id="email"
							{...register('email')}
							required
						/>
                    <br />
                    {errors.email && (
							<p className={classes.ErrorMsg}>{errors.email?.message}</p>
						)}
                        <br/>
                        <label htmlFor="access_code">Access Code:</label>
						<br />
                        <input
							type="text"
							id="access_code"
							placeholder="Your Access Code"
                            className={classes.password}
							{...register('access_code')}
							required
						/>
						<br />
                        {errors.access_code && (
							<p className={classes.ErrorMsg}>{errors.access_code?.message}</p>
						)}
                    <div className={classes.sign}>
                      {/* {!loading ? ( */}
                        <button
                          type="submit"
                          className={classes.btn_login}
                          id="do-login"
                        >
                          SIGN IN
                        </button>
                      {/* ) : ( */}
                        {/* <> */}
                          {/* <div className={classes.loginLoading}> */}
                            {/* <SpinnerCustom /> */}
                            {/* {""} */}
                          {/* </div> */}
                        {/* </> */}
                      {/* )} */}
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdultLogin;
