import React from "react";
import Shap1 from "../assest/card-shap (1).png";
import Shap2 from "../assest/card-shap (2).png";
import Shap3 from "../assest/card-shap (3).png";
import Shap4 from "../assest/card-shap (4).png";
import SpanBG from "../assest/span-bg.png";
import Email from "../assest/email-icon.png";
import Lock from "../assest/Lock.png";
import Google from "../assest/google.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PasswordField from "material-ui-password-field";
import { Link } from "react-router-dom";

const ResetPassword = () => {
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
              Reset your
              <span
                className="span-bg sign-span"
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
              Enter a new password, the new password can not be similar to the
              old one.
            </p>

            <div className=" input-bg w-100 flex justify-center items-center px-[30px] h-[65px] rounded-[10px] mb-3">
              <PasswordField
                variant="outlined"
                className="w-[100%] myTextField"
                id="outlined-number"
                placeholder="New Password"
                type="password"
                InputLabelProps={{
                  shrink: false,
                }}
              />
            </div>
            <div className=" input-bg w-100 flex justify-center items-center px-[30px] h-[65px] rounded-[10px] mb-3">
              <PasswordField
                variant="outlined"
                className="w-[100%] myTextField"
                id="outlined-number"
                placeholder="Confirm New Password"
                type="password"
                InputLabelProps={{
                  shrink: false,
                }}
              />
            </div>

            <button className="bg-primary btn w-100 rounded-[10px] text-light font-medium mt-3 h-[60px]">
              Reset New Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
