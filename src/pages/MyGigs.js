import React from "react";
import Shap1 from "../assest/card-shap (1).png";
import Shap2 from "../assest/card-shap (2).png";
import Shap3 from "../assest/card-shap (3).png";
import Shap4 from "../assest/card-shap (4).png";
import room from "../assest/room.png";
import Airplane from "../assest/airplane.png";

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
  {
    id: 2,
    image:
      "https://www.traveloffpath.com/wp-content/uploads/2022/05/Travel-Demand-is-Back-to-Pre-Pandemic-Levels-and-What-it-Means-To-You-This-Summer.jpg",
  },
  {
    id: 2,
    image:
      "https://www.traveloffpath.com/wp-content/uploads/2022/05/Travel-Demand-is-Back-to-Pre-Pandemic-Levels-and-What-it-Means-To-You-This-Summer.jpg",
  },
];

const MyGigs = () => {
  return (
    <div>
      <div className="container">
        <div className=" rounded-[30px] py-[5rem] relative">
          <div className="d-none d-md-block">
            <img
              className="w-[35px] absolute left-[-15px] top-[30%]"
              src={Shap4}
            />
            <img
              className="w-[79px] absolute xl:right-[-5%] right-[3%] top-[23%]"
              src={Shap1}
            />
            <img
              className="w-[79px] absolute left-[45%] top-[8%]"
              src={Shap2}
            />
            <img
              className="w-[79px] absolute right-[-3%] bottom-[5%]"
              src={Shap3}
            />
          </div>

          <div className="between mx-[4%] mb-[2%]">
            <h3 className="text-dark primary-font my-auto">My Gigs</h3>
            <div className="flex ">
              <button className="border border-primary btn w-[15rem] mr-3 rounded-[10px] text-primary font-medium mt-3 h-[60px] ">
                My Gigs
              </button>

              <Link to="/new-gig">
                <button className="bg-primary btn w-[15rem]  rounded-[10px] text-light font-medium mt-3 h-[60px]">
                  My Orders
                </button>
              </Link>
            </div>
          </div>

          <div className="flex-container">
            {GigListing1.map((item) => {
              return (
                <>
                  <div className="card w-[450px] rounded-[30px] p-[20px] m-3">
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

                    <div className="flex justify-center mt-3">
                      <h4 className="font-medium w-[25%]">Rome</h4>
                      <div className="w-[25%] border-t-[2px] border-dotted border-[#5477F3]  mt-[17px]"></div>
                      <img className="w-[10%] mx-[10px]" src={Airplane} />
                      <div className="w-[25%] border-t-[2px] border-dotted border-[#5477F3]  mt-[17px]"></div>
                      <h4 className="font-medium ml-[10px] w-[25%]">
                        Pakistan
                      </h4>
                    </div>

                    <p className="line-m mt-3">
                      Description will go here and this is dummy copy. It is not
                      meant to be read. It has been placed here solely to
                      demonstrate...
                    </p>
                    <div className="flex mt-3">
                      <p className="fw-bold ml-[10px] mr-[30px] ">
                        18 Feb 2023
                      </p>
                      <div className="border-l-[1.5px] border-gray-500 h-[20px] my-auto"></div>
                      <p className="fw-bold pl-[20px] h-[30px]">Sara Ahmed</p>
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
                    <Link to="/gig-detail">
                      <button className="border border-primary btn w-[100%] mr-3 rounded-[10px] text-primary font-medium mt-3 h-[50px] mt-4">
                        Order
                      </button>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
          <div className="between mx-[4%] my-[2%]">
            <h3 className="text-dark primary-font my-auto">Orders Received</h3>
          </div>

          <div className="flex-container">
            {GigListing1.map((item) => {
              return (
                <>
                  <div className="card w-[450px] rounded-[30px] p-[20px] m-3">
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

                    <div className="flex justify-center mt-3">
                      <h4 className="font-medium w-[25%]">Rome</h4>
                      <div className="w-[25%] border-t-[2px] border-dotted border-[#5477F3]  mt-[17px]"></div>
                      <img className="w-[10%] mx-[10px]" src={Airplane} />
                      <div className="w-[25%] border-t-[2px] border-dotted border-[#5477F3]  mt-[17px]"></div>
                      <h4 className="font-medium ml-[10px] w-[25%]">
                        Pakistan
                      </h4>
                    </div>

                    <p className="line-m mt-3">
                      Description will go here and this is dummy copy. It is not
                      meant to be read. It has been placed here solely to
                      demonstrate...
                    </p>
                    <div className="flex mt-3">
                      <p className="fw-bold ml-[10px] mr-[30px] ">
                        18 Feb 2023
                      </p>
                      <div className="border-l-[1.5px] border-gray-500 h-[20px] my-auto"></div>
                      <p className="fw-bold pl-[20px] h-[30px]">Sara Ahmed</p>
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

                    <button className="border border-primary btn w-[100%] mr-3 rounded-[10px] text-primary font-medium mt-3 h-[50px] mt-4">
                      Order
                    </button>
                  </div>
                </>
              );
            })}
          </div>

          {/* <div className="flex justify-center w-[100%] mt-4">
            {" "}
            <button className="bg-primary btn w-[320px]  rounded-[10px] text-light font-medium mt-3 h-[60px]">
              Load More
            </button>{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyGigs;
