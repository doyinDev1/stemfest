import React from "react";
import classes from "../styles/Login.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
// import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Config } from '../../Config/Config';
// import Loader from '../Loader/Loader';
// import SpinnerCustom from '../CommonForm/SpinnerCustom/SpinnerCustom';
import { Config } from '../Config/Config'
import toast, { Toast } from 'react-hot-toast'
import { Spinner, Button } from 'react-bootstrap'
const validationSchema = Yup.object().shape({
	access_code: Yup.string().required('Access Code is required'),
	// access_code: Yup.string().required('Access code is required'),
});

function AdultLogin() {
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

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
        access_code: data.access_code,
    };
    setLoading(true);
    		console.log(data, "data")

    axios
    	.post(`${Config.url.API_URL}/user/login`, myFormData)
    	.then((res) => {
    		const userData = JSON.stringify({
    			data: res.data,
          token: res.data.token,
          name: res.data.token,
          children_no: res.data.children_no,
          email: res.data.email,
          phone: res.data.phone
    		});
        sessionStorage.setItem('spAdmin', userData);
        toast.success('Login Successfully');
    		router('/adult-dashboard');
    	})
    	.catch((err) => {
        console.log(err)
    		const errMsg = err?.response?.data?.message
    			? err?.data?.error
    			: 'Failed to Login!';
    		toast.error(errMsg);
    		setLoading(false);
    	});
  };

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
                      	
                        <br/>
                        <label htmlFor="access_code">Adult Access Code:</label>
						<br />
                        <input
							type="text"
							id="access_code"
							placeholder="Your Access Code"
                            className={classes.password}
							{...register('access_code')}
							required
              />
              {errors.access_code && (
    <p className={classes.ErrorMsg}>{errors.access_code?.message}</p>
  )}
						<br />
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
                          {/* <Button variant="primary" disabled> */}
    {/* <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button> */}
                          {/* </div>
                        </>
                      )} */}
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
