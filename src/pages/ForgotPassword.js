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

const ForgotPassword = () => {
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
              Forgot
              <span
                className="span-bg signup-span"
                style={{ backgroundImage: `url(${SpanBG})` }}
              >
                {" "}
                Password
              </span>{" "}
            </h1>
          </div>

          <div className="sm:w-[500px] w-[320px] my-5">
            <p className="text-center my-4">
              {" "}
              Enter your email address associated with your account
            </p>
            <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3">
              <TextField
                className="w-[100%]"
                id="outlined-number"
                placeholder="Email Address"
                type="email"
                InputLabelProps={{
                  shrink: false,
                }}
              />
            </div>
            <div className="flex justify-center w-100">
              <Link to="/phone-verification">
                <button className="bg-primary btn w-[15rem] rounded-[10px] text-light font-medium mt-3 h-[60px]">
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

export default ForgotPassword;
