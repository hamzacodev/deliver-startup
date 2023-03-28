import React from "react";
import Shap1 from "../assest/card-shap (1).png";
import Shap2 from "../assest/card-shap (2).png";
import Shap3 from "../assest/card-shap (3).png";
import Shap4 from "../assest/card-shap (4).png";
import SpanBG from "../assest/span-bg.png";
import mappin from "../assest/mappin.png";
import crosshair from "../assest/crosshair.png";
import Email from "../assest/email-icon.png";
import Lock from "../assest/Lock.png";
import Google from "../assest/google.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PasswordField from "material-ui-password-field";
import { Link } from "react-router-dom";

const NewGig = () => {
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
              Create
              <span
                className="span-bg signup-span"
                style={{ backgroundImage: `url(${SpanBG})` }}
              >
                {" "}
                A New Gig
              </span>{" "}
            </h1>
          </div>

          <div className="sm:w-[500px] w-[320px] my-5">
            {/* Headline */}
            <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3 relative">
              <p className="absolute top-[-21px] px-[20px] bg-white">
                Headline
              </p>
              <TextField
                className="w-[100%]"
                id="outlined-number"
                placeholder="Give your gig a headline"
                type="text"
                InputLabelProps={{
                  shrink: false,
                }}
              />
            </div>
            {/* Give your gig a headline */}
            <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3 relative h-[10rem] mt-[2.3rem]">
              <p className="absolute top-[-21px] px-[20px] bg-white">
                Description
              </p>
              <textarea
                className="h-[8rem] pt-2"
                placeholder="Give details about your gig "
              ></textarea>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                {/* Rate per KG */}
                <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3 relative mt-[2rem]">
                  <p className="absolute top-[-21px] px-[20px] bg-white">
                    Rate per KG
                  </p>
                  <h4 className="my-auto">Rs.</h4>
                  <TextField
                    className="w-[100%]"
                    id="outlined-number"
                    placeholder="0"
                    type="text"
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                {/* Available Space */}
                <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3 relative mt-[2rem]">
                  <p className="absolute top-[-21px] px-[20px] bg-white">
                    Available Space
                  </p>

                  <TextField
                    className="w-[100%]"
                    id="outlined-number"
                    placeholder="0"
                    type="text"
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
                  <h4 className="my-auto">KG</h4>
                </div>
              </div>
            </div>

            {/* Travelling Date */}
            <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3 relative mt-[2rem]">
              <p className="absolute top-[-21px] px-[20px] bg-white">
                Travelling Date
              </p>
              <TextField
                className="w-[100%]"
                id="outlined-number"
                placeholder="Select your date"
                type="date"
                InputLabelProps={{
                  shrink: false,
                }}
              />
            </div>

            {/* Travelling From */}
            <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3 relative mt-[2rem]">
              <p className="absolute top-[-21px] px-[20px] bg-white">
                Travelling From
              </p>
              <TextField
                className="w-[100%]"
                id="outlined-number"
                placeholder="Enter your current location"
                type="text"
                InputLabelProps={{
                  shrink: false,
                }}
              />
              <div className="my-auto mr-[10px]">
                <img className="" src={mappin} />
              </div>
            </div>

            {/* Travelling From */}
            <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3 relative mt-[2rem]">
              <p className="absolute top-[-21px] px-[20px] bg-white">
                Travelling To
              </p>
              <TextField
                className="w-[100%]"
                id="outlined-number"
                placeholder="Enter your destination"
                type="text"
                InputLabelProps={{
                  shrink: false,
                }}
              />
              <div className="my-auto mr-[10px]">
                <img className="" src={crosshair} />
              </div>
            </div>
            <Link to="/gig-listing">
              <button className="bg-primary btn w-100 rounded-[10px] text-light font-medium mt-3 h-[60px]">
                Create
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGig;
