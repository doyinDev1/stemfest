import React from "react";
import CheckoutPage from "../components/CheckoutPage/index";
import { theme, useStyle } from "../components/Layout/styles";
import { ThemeProvider } from "@material-ui/core/styles";
// import classes from '../components/StemLogin/Stemfest.module.css'
import classes from "./Register.module.css";
import Navbar from "../components/landing/Navbar/Navbar";
function Register2() {
  return (
    <>
    <Navbar/>
      <div className={classes.image}>
        <div className={classes.overlay}>
          <section>
            <div className={classes.LoginTypem}>
                <div className={classes.Topp}>
              <div className={classes.body}>
                  <section className={classes.login} id="login">
                    <div className={classes.form}>
                      <div>
                        <ThemeProvider theme={theme}>
                          <CheckoutPage />
                        </ThemeProvider>
                      </div>
                      <div className={classes.IImages2}>
                      <img
                      style={{transform: 'scale(1.7)'}}
                        className={classes.Leftimg}
                        src="https://res.cloudinary.com/naijakids/image/upload/v1650921630/Web_1920_4_1_1_bptqg4.png"
                        alt="stemfest"
                      />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Register2;
