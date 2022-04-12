import React from "react";
import classes from "../styles/Login.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Config } from "../Config/Config";
import toast from "react-hot-toast";
import { Spinner, Button } from "react-bootstrap";
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),

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
    mode: "onSubmit",
  });

  const onUserFormSubmit = (data) => {
    const myFormData = {
      email: data.email,
      password: data.password
    };
    setLoading(true);
// console.log(data)
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
                    <br />
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email Address"
                      className={classes.password}
                      {...register("email")}
                      required
                    />
                    {errors.email && (
                      <p className={classes.ErrorMsg}>
                        {errors.email?.message}
                      </p>
                    )}
                    <br />
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                      type="password"
                      id="password"
                      placeholder="Your Password"
                      className={classes.password}
                      {...register("password")}
                      required
                    />
                    {errors.password && (
                      <p className={classes.ErrorMsg}>
                        {errors.password?.message}
                      </p>
                    )}
                    <br />
                    <div className={classes.sign}>
                      {!loading ? (
                        <button
                          type="submit"
                          className={classes.btn_login}
                          id="do-login"
                        >
                          SIGN IN
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
