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
const adminValidationSchema = Yup.object().shape({
  access_code: Yup.string().required("Access code is required"),
});

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register: adminRegister,
    handleSubmit: adminHandleSubmit,
    formState: adminFormState,
  } = useForm({
    resolver: yupResolver(adminValidationSchema),
    mode: "onSubmit",
  });

  const onAdminFormSubmit = (data) => {
    const myFormData = data;
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
                    src="https://res.cloudinary.com/naijakids/image/upload/v1648457537/IMG_20220328_094349_mfqcg3.jpg"
                    alt="Acesss"
                    width={360}
                    height={100}
                  />
                </div>
                <div className={classes.head}>
                  <h1 className={classes.company}>Login</h1>
                </div>
                <div className={classes.form}>
                  <form
                    onSubmit={adminHandleSubmit(onAdminFormSubmit)}
                    className={classes.FormWidth}
                  >
                    <input
                      type="number"
                      placeholder="Access Code"
                      className={classes.password}
                      id="access_code"
                      {...adminRegister("access_code")}
                      required
                    />
                    <br />

                    {/* <div className={classes.RadioDiv}>
							<div className={classes.radioLeft}>
								<input
									id="common"
									onClick={handleUserButton}
									style={{ backgroundColor: activeForm === 'common' ? 'var(--color-orange)' : '' }}
									type="radio"
									value="Male"
									name="gender"
								/>{' '}
								Candidate
							</div>
							<div className={classes.radioRight}>
								<input
									id="common"
									checked
									onClick={handleUserButton}
									style={{ backgroundColor: activeForm === 'common' ? 'var(--color-orange)' : '' }}
									type="radio"
									value="Male"
									name="gender"
								/>{' '}
								Admin
							</div>
						</div> */}
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

export default Login;
