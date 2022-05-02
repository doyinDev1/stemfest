import React from "react";
import classes from "../styles/AdultDashboard.module.css";
import "../styles/AdultDashboard.css";
import { FiCheckCircle } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Card from "../components/AdultDashboard/Card";
import kidImage from "../images/assets/qr-code.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Config } from "../Config/Config";
import toast from "react-hot-toast";
import SpinnerCustom from "../components/SpinnerCustom/SpinnerCustom";
import DownloadStemfest from '../components/DownloadStemfest/DownloadStemfest'
// import DownloadStemfest from '../components/DownloadStemfest/DownloadStemfest'
import Navbar from '../components/landing/Navbar/Navbar'
const AdultDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    

    // get User info 
    const UserInfo = JSON.parse(sessionStorage.getItem("sfUser"));
// get token from User info here
    const token = UserInfo.data.token;
    // config here for axios authorization
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true);

    axios
      .get(`${Config.url.API_URL}/user/dashboard`, config)
      .then((res) => {
        if (res.data?.error?.length) throw new Error(res.data.error[0]);

        setData(res.data);
        setLoading(false);

      })
      .catch((err) => {
        const errMsg = err?.message || "Failed to Register!";
        toast.error(errMsg);
      });
  }, []);


  return (
    <>
      {loading === true ? (
        <>
          <div className={classes.Center}>
            <SpinnerCustom />
          </div>
        </>
      ) : (
        <>
        {console.log(data)}
        
        {/* <Navbar/> */}
          <div className="adultDashboard">
            <div className={classes.image}>
              <div className={classes.overlay}>
                <>
                  <div className={classes.Page}>
                    <div className={classes.Pad}>
                      <div className={classes.LeftCard}>
                        <div className={classes.TopLeftCard}>
                          <div className={classes.TopText}>
                            <h1 className={classes.RegText}>
                              <FiCheckCircle /> Registration Completed !!
                            </h1>
                          </div>
                        </div>
                        <div className={classes.MainTopText}>
                          <p>
                          Thank you for registering for STEAM Fest 2022. 
                          We are looking forward to seeing you on July 30th, 
                          2022 at Victoria Island, Lagos. 
                          You will soon receive an email confirming your 
                          registration.Please, check your spam/ promotions email if you do not see the email in your inbox.
                          </p>
                        </div>
                        <div className={classes.MainBottomText}>
                          <h3>Print Your Badge </h3>
                          <p>
                          Please ensure you download and print your 
                          QR code before coming to the event as this 
                          would serve as your access into the event.Also, don't forget to put on your nose mask to gain access into the event.
                          </p>
                          {/* <Button
                            variant="primary"
                            style={{
                              color: "#AAB0BB",
                              backgroundColor: "#134C72",
                            }}
                          >
                            Download QR Code Pass
                          </Button> */}
                          <DownloadStemfest
                          status={true}
                          name={data?.adultDetails?.name}
                          qr_code={data?.adultDetails?.qr_code}

                          />
                        </div>
                      </div>
                    </div>
                    <div className={classes.Pad}>
                      <div className={classes.LeftCard}>
                        <div className={classes.RightCard}>
                          <div className={classes.TopRightCard}>
                            <h2>
                              Children Registered :{" "}
                              {data.adultDetails?.number_of_children}
                            </h2>
                          </div>
                          <p>
                            Thank you {data.adultDetails?.name} for registering
                            for Stem fest 2022. We're looking forward to seeing you on the 30th of July, 2022 at Victoria Island, Lagos.
                            Please, find your QR code pass below.
                            You will receive an email confirming your registration,
                            please check your spam/ promotions email if you do not see
                            the email in your inbox and add this to your
                            safe sender's list. (registration@9ijakids.com)
                          </p>
{console.log(data)}
                          <div className="adultDashboard__Cards">
                            {data?.children?.map((child, index) => {
                              return (
                                <>
                                  <Card
                                    key={index}
                                    image={kidImage}
                                    name={child.name}
                                    age={child.age_range}
                                    qr_code={child.qr_code}
                                  />
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdultDashboard;
