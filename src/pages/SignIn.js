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

const SignIn = () => {
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
              Let’s Get You
              <span
                className="span-bg sign-span"
                style={{ backgroundImage: `url(${SpanBG})` }}
              >
                {" "}
                Sign In
              </span>{" "}
            </h1>
          </div>

          <div className="sm:w-[500px] w-[320px] my-5">
            <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3">
              <div className="my-auto">
                <img src={Email} />
              </div>

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

            <div className=" input-bg w-100 flex justify-center items-center px-[30px] h-[65px] rounded-[10px] mb-3">
              <div className="my-auto">
                <img className="mr-[25px]" src={Lock} />
              </div>
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

            <div className="text-end">
              <Link to="/forgot-password">
                <p className="pointer mt-[-10px]">Forgot Password?</p>
              </Link>
            </div>
            <Link to="/get-started">
              <button className="bg-primary btn w-100 rounded-[10px] text-light font-medium mt-3 h-[60px]">
                Sign In
              </button>
            </Link>

            <div className="row mt-[30px] px-[3rem]">
              <div className="col-5 my-auto">
                {" "}
                <hr />
              </div>
              <div className="col-2 text-center">
                {" "}
                <p className="text-dark">OR</p>
              </div>
              <div className="col-5 my-auto">
                {" "}
                <hr />
              </div>
            </div>
            <button className="border border-primary btn w-100 rounded-[10px] text-primary font-medium mt-3 h-[60px] flex justify-center items-center">
              <img className="mx-3" src={Google} /> Sign in with Google
            </button>
            <div className="text-center mt-2">
              Not an existing user?{" "}
              <Link to="/sign-up">
                {" "}
                <span className="fw-bold text-primary pointer">Sign Up</span>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
