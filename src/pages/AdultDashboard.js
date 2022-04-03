import React from "react";
import classes from "../styles/AdultDashboard.module.css";
import { FiCheckCircle } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Card from "../components/landing/Card";

import kidImage from "../images/assets/children.png";

const AdultDashboard = () => {
  return (
    <>
      <div className={classes.image}>
        <div className={classes.overlay}>
          <>
            <div className={classes.Page}>
              <div className={classes.Pad}>
                <div className={classes.LeftCard}>
                  <div className={classes.TopLeftCard}>
                    <div className={classes.TopText}>
                      <h1 className={classes.RegText}>
                      
                        <FiCheckCircle />  Registration Completed !!
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
                    <Button variant="primary">Download QR Code Pass</Button>
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
                    <div className={classes.KidCards}>
                      <Card
                        image={kidImage}
                        about="Samuel Jackson"
                        title="<h4 class='bg-green rounded-full py-1'>Baby Kidoo</h4>"
                        age="<h4 class='text-green'> Age 5-7 </h4>"
                      />
                      <Card
                        image={kidImage}
                        about="Jason Statham"
                        title="<h4 class='bg-green rounded-full py-1'>Mini Kidoo</h4>"
                        age="<h4 class='text-green'> Age 8-12 </h4>"
                      />
                      <Card
                        image={kidImage}
                        about="Dwayne Johnson"
                        title="<h4 class='bg-green rounded-full py-1'>Super Kidoo</h4>"
                        age="<h4 class='text-green'> Age 13-15 </h4>"
                      />
                      <Card
                        image={kidImage}
                        about="Dwayne Johnson"
                        title="<h4 class='bg-green rounded-full py-1'>Super Kidoo</h4>"
                        age="<h4 class='text-green'> Age 13-15 </h4>"
                      />
                      <Card
                        image={kidImage}
                        about="Dwayne Johnson"
                        title="<h4 class='bg-green rounded-full py-1'>Super Kidoo</h4>"
                        age="<h4 class='text-green'> Age 13-15 </h4>"
                      />
                      <Card
                        image={kidImage}
                        about="Dwayne Johnson"
                        title="<h4 class='bg-green rounded-full py-1'>Super Kidoo</h4>"
                        age="<h4 class='text-green'> Age 13-15 </h4>"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default AdultDashboard;
