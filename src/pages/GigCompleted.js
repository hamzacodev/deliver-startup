import React from "react";
import Shap1 from "../assest/card-shap (1).png";
import Shap2 from "../assest/card-shap (2).png";
import Shap3 from "../assest/card-shap (3).png";
import Shap4 from "../assest/card-shap (4).png";
import room from "../assest/room.png";
import Airplane from "../assest/airplane.png";
import mappin from "../assest/mappin.png";
import crosshair from "../assest/crosshair.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PasswordField from "material-ui-password-field";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const GigListing1 = [
  {
    id: 1,
    image:
      "https://www.traveloffpath.com/wp-content/uploads/2022/05/Travel-Demand-is-Back-to-Pre-Pandemic-Levels-and-What-it-Means-To-You-This-Summer.jpg",
  },
];

const GigCompleted = () => {
  return (
    <div>
      <div className="container">
        <div className=" rounded-[30px] py-[2rem] relative">
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

          <div className="text-center mx-[4%] mb-[2%]">
            <h1 className="text-dark primary-font my-auto">Gig Detail</h1>
          </div>

          <div className="flex-container">
            {GigListing1.map((item) => {
              return (
                <>
                  <div className="card sm:w-[780px] w-[320px] rounded-[30px] p-[20px] m-3 p-[30px]">
                    <div className="between">
                      <div className="flex">
                        <img
                          className="w-[130px] h-[130px] fit rounded-[10px]"
                          src={item.image}
                        />
                        <div className="ml-[20px] my-auto">
                          <p>User Title ie New User etc</p>
                          <h4 className="font-medium text-dark">
                            Headline Goes Here
                          </h4>
                          <Rating
                            className="mt-2"
                            name="half-rating-read"
                            defaultValue={5}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-3">
                      <p className="line-m">
                        Description will go here and this is dummy copy. It is
                        not meant to be read. It has been placed here solely to
                        demonstrate. Description will go here and this is dummy
                        copy. It is not meant to be read. It has been placed
                        here solely to demonstrate...
                      </p>
                    </div>

                    <div className="flex mt-3">
                      <div className="my-auto">
                        <img src={room} />
                      </div>

                      <h4 className="font-medium ml-[10px] mr-[30px] text-primary">
                        Space Available
                      </h4>
                      <h4 className=" my-auto text-muted"> %</h4>
                      <h4 className="font-medium pl-[10px] text-primary">
                        Rate per KG
                      </h4>
                    </div>

                    <div className="row my-2">
                      {/* Travelling From */}
                      <div className="col-md-6 col-12 px-2">
                        <div className=" input-bg  flex px-[30px] py-[7px] rounded-[10px] mb-3 relative mt-[2rem]">
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
                      </div>
                      {/* Travelling From */}
                      <div className="col-md-6 col-12 px-2">
                        <div className=" input-bg  flex px-[30px] py-[7px] rounded-[10px] mb-3 relative mt-[2rem]">
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
                      </div>
                    </div>

                    <p className="">Gig by</p>
                    <div className="between">
                      <div className="flex">
                        <h4 className="fw-bold mr-[30px] text-muted my-auto">
                          18 Feb 2023
                        </h4>
                        <div className="border-l-[1.5px] border-gray-500 h-[30px] my-auto"></div>
                        <h4 className="fw-bold pl-[20px] h-[30px] text-muted my-auto">
                          Sara Ahmed
                        </h4>
                      </div>

                      <div className="flex my-auto">
                        <button className="border border-primary btn w-[8rem] mr-3 rounded-[10px] text-primary font-medium mt-3 h-[50px] ">
                          Chat
                        </button>

                        <Link to="/new-gig">
                          <button className="bg-primary btn w-[12rem]  rounded-[10px] text-light font-medium mt-3 h-[50px]">
                            Mark as Complete
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/* <div className="flex justify-center w-[100%] mt-4">
            {" "}
            <button className="bg-primary btn w-[320px]  rounded-[10px] text-light font-medium mt-3 h-[50px]">
              Load More
            </button>{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GigCompleted;
