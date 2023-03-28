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
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const GiveRating = () => {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <div className="container">
        <div className="text-center w-100">
          <h1 className="primary-font ">Give a Rating</h1>
        </div>
        <div className="flex justify-center">
          <div className="card flex flex-col sm:w-[600px] w-[320px] items-center rounded-[30px] p-[3rem] relative">
            <div className="d-none d-md-block">
              <img
                className="w-[35px] absolute left-[0px] top-[30%]"
                src={Shap4}
              />
              <img
                className="w-[79px] absolute xl:left-[-20%] left-[3%] bottom-[23%]"
                src={Shap1}
              />
              <img
                className="w-[79px] absolute right-[-20%] bottom-[23%]"
                src={Shap2}
              />
              <img
                className="w-[79px] absolute right-[-10%] top-[20%]"
                src={Shap3}
              />
            </div>

            <div className="flex flex-col items-center w-100 p-[3rem]">
              <p>Was the service as described?</p>
              <Stack className="mt-2" spacing={1}>
                <Rating name="half-rating" defaultValue={0} size="large" />
              </Stack>
              <p className="mt-[2.5rem]">Satisfied with the pricing?</p>
              <Stack className="mt-2" spacing={1}>
                <Rating name="half-rating" defaultValue={0} size="large" />
              </Stack>
              <p className="mt-[2.5rem]">Communication with the seller?</p>
              <Stack className="mt-2" spacing={1}>
                <Rating name="half-rating" defaultValue={0} size="large" />
              </Stack>
              <p className="mt-[2.5rem]">Leave feedback for the user</p>
              <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3 relative h-[7rem] mt-2">
                <textarea
                  className="h-[5rem] pt-2 text-center"
                  placeholder="Give details about your gig "
                ></textarea>
              </div>

              <Link to="/new-gig">
                <button className="bg-primary btn w-[15rem]  rounded-[10px] text-light font-medium mt-3 h-[60px]">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveRating;
