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
import { Spinner , Button} from "react-bootstrap";

// import SpinnerCustom from '../CommonForm/SpinnerCustom/SpinnerCustom';
import toast from "react-hot-toast";
import { Config } from "../Config/Config";
import axios from 'axios'
const adminValidationSchema = Yup.object().shape({
  access_code: Yup.string().required("Access code is required"),
});

function Sponsors() {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const router = useNavigate();

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

    axios
    .post(`${Config.url.API_URL}/sponsor/login`, myFormData)
    .then((res) => {
      if (res.data?.error?.length) throw new Error(res.data.error[0]);
      const userData = JSON.stringify({
        data: res.data,
        
      });
      sessionStorage.setItem("sfSponsor", userData);
      toast.success("Login Successfully");
      router("/sponsors-dashboard");
    })
    .catch((err) => {
      const errMsg = err?.message || "Failed to Login!";
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
                  <h1 className={classes.company}>SPONSORS LOGIN</h1>
                </div>
                <div className={classes.form}>
                  <form
                    onSubmit={adminHandleSubmit(onAdminFormSubmit)}
                    className={classes.FormWidth}
                  >
                    <label htmlFor="access_code">Access Code:</label>
						<br />
                    <input
                      type="text"
                      placeholder="Access Code"
                      className={classes.password}
                      id="access_code"
                      {...adminRegister("access_code")}
                      required
                    />
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

export default Sponsors;
