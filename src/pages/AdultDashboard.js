import React from "react";
import classes from "../styles/AdultDashboard.module.css";
import "../styles/AdultDashboard.css";
import { FiCheckCircle } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Card from "../components/AdultDashboard/Card";

import kidImage from "../images/assets/qr-code.png";

const AdultDashboard = () => {
  return (
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
                      Thank you for registering for Stem fest 2022. We're
                      looking forward to seeing you on 02-May-2022 at Aso Rock,
                      Abuja. You will soon recieve an email confirming your
                      registration from registration@9ijakids.com. Please Check
                      your junk/spam folder and add this to your safe sender's
                      list.
                    </p>
                  </div>
                  <div className={classes.MainBottomText}>
                    <h3>Print Your Badge </h3>
                    <p>
                      Please ensure you download and print your QR code before
                      coming to the event. Dont forget to put on your nose mask
                      for entry too.
                    </p>
                    <Button
                      variant="primary"
                      style={{
                        color: "#AAB0BB",
                        backgroundColor: "#134C72",
                      }}
                    >
                      Download QR Code Pass
                    </Button>
                  </div>
                </div>
              </div>
              <div className={classes.Pad}>
                <div className={classes.LeftCard}>
                  <div className={classes.RightCard}>
                    <div className={classes.TopRightCard}>
                      <h2>Children Registered : 6</h2>
                    </div>
                    <p>
                      Thank you for registering for Stem fest 2022. We're
                      looking forward to seeing you on 02-May-2022 at Aso Rock,
                      Abuja. You will soon recieve an email confirming your
                      registration from registration@9ijakids.com. Please Check
                      your junk/spam folder and add this to your safe sender's
                      list.
                    </p>

                    <div className="adultDashboard__Cards">
                      <Card image={kidImage} name="Adult Name" age="5-7" />
                      <Card image={kidImage} name="Child Name" age="5-7" />
                      <Card image={kidImage} name="Child Name" age="5-7" />
                      <Card image={kidImage} name="Child Name" age="5-7" />
                      <Card image={kidImage} name="Child Name" age="5-7" />
                      <Card image={kidImage} name="Child Name" age="5-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default AdultDashboard;
