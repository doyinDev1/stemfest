import React from "react";
import classes from "./Stemfest.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Config } from '../../Config/Config'
import toast from "react-hot-toast";
import { Spinner, Button } from "react-bootstrap";
import Navbar from '../landing/Navbar/Navbar'
const validationSchema = Yup.object().shape({
	email: Yup.string().required("Email is required"),
	password: Yup.string().required("Password is required"),
  
  });
const Resend = () => {
	const [loading, setLoading] = useState(false);
	const router = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm({
		resolver: yupResolver(validationSchema),
		mode: "onSubmit",
	  });
	  const onUserFormSubmit = (data) => {
		const myFormData = {
		  email: data.email,
		  password: data.password
		};
		setLoading(true);
		axios
		  .post(`${Config.url.API_URL}/user/login`, myFormData)
		  .then((res) => {
			// check for data length as endpoint returned status code 200 for errors
			if (res.data?.error?.length) throw new Error(res.data.error[0]);
			const userData = JSON.stringify({
			  data: res.data,
			  token: res.data.token,
			  name: res.data.token,
			  children_no: res.data.children_no,
			  email: res.data.email,
			  phone: res.data.phone,
			});
			sessionStorage.setItem("sfUser", userData);
			toast.success("Login Successfully");
			router("/adult-dashboard");
		  })
		  .catch((err) => {
			const errMsg = err?.message || "Failed to Register!";
			toast.error(errMsg);
			setLoading(false);
		  });
	  };
		

  return (
    <>
    <Navbar/>
    <div className={classes.image}>
      <div className={classes.overlay}>
        <section>
          <div className={classes.LoginTypem}>
            <div className={classes.body}>
              <section className={classes.login} id="login">
                <div className={classes.head}>
                  <h1 className={classes.company}>Resend Email</h1>
                </div>
                <div className={classes.form}>
                  <form
                    onSubmit={handleSubmit(onUserFormSubmit)}
                    className={classes.FormWidth}
                  >
                    <label>Email:</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className={classes.password}
                      id="email"
                      required
					  {...register("email")}

                    /> {errors.email && (
						<p className={classes.ErrorMsg}>
						  {errors.email?.message}
						</p>
					  )}
                    <br />
                
                    <Link to="/login">Go back to Login</Link>
                    <div className={classes.sign}>
					{!loading ? (
                        <button
                          type="submit"
                          className={classes.btn_login}
                          id="do-login"
                        >
                          RESEND LOGIN DETAILS
                        </button>
                      ) : (
                        <>
                          <div className={classes.loginLoading}>
                            <Button variant="primary" disabled>
                              <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                              Loading...
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </form>
                  <img
				  className={classes.Leftimg}
                    src="https://res.cloudinary.com/naijakids/image/upload/v1650921630/Web_1920_4_1_1_bptqg4.png"
                    alt="stemfest"
                  />
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div> 
    </>
  );
};

export default Resend;
