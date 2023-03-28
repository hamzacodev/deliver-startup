import React from "react";
import Shap1 from "../assest/card-shap (1).png";
import Shap2 from "../assest/card-shap (2).png";
import Shap3 from "../assest/card-shap (3).png";
import Shap4 from "../assest/card-shap (4).png";
import SpanBG from "../assest/span-bg.png";
import Email from "../assest/email-icon.png";
import Google from "../assest/google.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PasswordField from "material-ui-password-field";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useState } from "react";

const PhoneVerification = () => {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <div className="container">
        <div className="card flex flex-col items-center rounded-[30px] py-[5rem] relative">
          <div className="d-none d-md-block">
            <img
              className="w-[35px] absolute left-[-15px] top-[30%]"
              src={Shap4}
            />
            <img
              className="w-[79px] absolute xl:left-[13%] left-[3%] bottom-[23%]"
              src={Shap1}
            />
            <img
              className="w-[79px] absolute right-[-40px] bottom-[23%]"
              src={Shap2}
            />
            <img
              className="w-[79px] absolute right-[7%] top-[20%]"
              src={Shap3}
            />
          </div>

          <div className="text-center w-100">
            <h1 className="primary-font ">
              Phone
              <span
                className="span-bg signup-span"
                style={{ backgroundImage: `url(${SpanBG})` }}
              >
                {" "}
                Verification
              </span>{" "}
            </h1>
          </div>

          <div className="sm:w-[500px] w-[320px] my-5">
            <p className="text-center my-4">
              {" "}
              Enter the 4-Digit code sent to your Phone Number
            </p>
            <div className="flex justify-center mb-3">
              <OtpInput
                value={otp}
                onChange={(val) => setOtp(val)}
                numInputs={4}
                // className="otpInput"

                inputStyle={{
                  // color: "#4f73f0",
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px",
                  backgroundColor: "#f1f4fe",
                  fontSize: "45px",
                  margin: "0 5px",
                }}
              />
            </div>
            <div className="text-center">
              <Link to="/reset-password">
                <button className="bg-primary btn w-50 rounded-[10px] text-light font-medium mt-3 h-[60px]">
                  Verify
                </button>
              </Link>
            </div>

            <div className="text-center mt-4">
              Didn’t receive a code?
              <Link to="">
                {" "}
                <span className="fw-bold text-primary pointer">Resend</span>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerification;
