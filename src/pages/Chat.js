import React from "react";
import Shap1 from "../assest/card-shap (1).png";
import Shap2 from "../assest/card-shap (2).png";
import Shap3 from "../assest/card-shap (3).png";
import Shap4 from "../assest/card-shap (4).png";
import SpanBG from "../assest/span-bg.png";
import Search from "../assest/Search.png";
import Send from "../assest/Send.png";
import morevertical from "../assest/morevertical.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PasswordField from "material-ui-password-field";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";

const UserList = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jessica Drew",
    text: "Ok, see you later",
    unseen: "2",
  },
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1218980856/photo/young-woman-drinking-coffee-and-texting.jpg?s=170667a&w=0&k=20&c=YG3h0R4qnfbEb17SX5Od4lfxle2J91Dtryv4680ytpE=",
    name: "Jessica Drew",
    text: "Ok, see you later",
    unseen: "",
  },
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1218980856/photo/young-woman-drinking-coffee-and-texting.jpg?s=170667a&w=0&k=20&c=YG3h0R4qnfbEb17SX5Od4lfxle2J91Dtryv4680ytpE=",
    name: "Jessica Drew",
    text: "Ok, see you later",
    unseen: "3",
  },
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1218980856/photo/young-woman-drinking-coffee-and-texting.jpg?s=170667a&w=0&k=20&c=YG3h0R4qnfbEb17SX5Od4lfxle2J91Dtryv4680ytpE=",
    name: "Jessica Drew",
    text: "Ok, see you later",
    unseen: "",
  },
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1218980856/photo/young-woman-drinking-coffee-and-texting.jpg?s=170667a&w=0&k=20&c=YG3h0R4qnfbEb17SX5Od4lfxle2J91Dtryv4680ytpE=",
    name: "Jessica Drew",
    text: "Ok, see you later",
    unseen: "",
  },
];

const Chat = () => {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <div className="container card rounded-[30px]  p-[3rem] relative">
        <div className="d-none d-md-block">
          <img
            className="w-[79px] absolute xl:left-[-5%] left-[3%] bottom-[23%]"
            src={Shap1}
          />
          <img
            className="w-[79px] absolute right-[-3%] bottom-[23%]"
            src={Shap2}
          />
          <img className="w-[79px] absolute right-[20%] top-[5%]" src={Shap3} />
        </div>
        <h1 className="primary-font mb-3">
          Chat
          <span
            className="span-bg sign-span"
            style={{ backgroundImage: `url(${SpanBG})` }}
          >
            {" "}
            Messages
          </span>{" "}
        </h1>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="w-100 flex px-[30px] py-[0px] rounded-[10px] mb-3 border-2 border-[#5477F3]">
              <div className="my-auto">
                <img src={Search} />
              </div>

              <TextField
                className="w-[100%]"
                id="outlined-number"
                placeholder="Search"
                type="email"
                InputLabelProps={{
                  shrink: false,
                }}
              />
            </div>
            <div className="input-bg rounded-[10px] mt-3 p-[16px] h-[31rem] overflow-auto smoth-scroll">
              {UserList.map((item) => {
                return (
                  <>
                    <div className="between mb-[20px] ">
                      <div className="flex">
                        <div className="my-auto">
                          <Avatar
                            src={item.image}
                            sx={{ width: 50, height: 50 }}
                          />
                        </div>

                        <div className="ml-[15px]">
                          <p className="fw-bold mb-[-5px] text-dark">
                            {item.name}
                          </p>

                          <p>{item.text}</p>
                        </div>
                      </div>
                      <div className="my-auto">
                        {item.unseen !== "" ? (
                          <>
                            <div className="w-[35px] h-[35px] flex justify-center items-center bg-primary rounded-circle text-white">
                              {item.unseen}
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="p-[20px] rounded-[10px] input-bg">
              <div className="between">
                <div className="flex">
                  <Avatar
                    sx={{ width: 50, height: 50 }}
                    src="https://img.freepik.com/free-photo/pleased-young-caucasian-woman-holding-mobile-phone-takeaway-coffee-cup-with-closed-eyes-isolated-blue-background_141793-139839.jpg"
                  />
                  <p className="ml-[15px] hw-bold text-dark my-auto">
                    David Moore
                    <i class="fa-regular fa-ellipsis-vertical"></i>
                  </p>
                </div>
                <div className="my-auto">
                  <div class="dropdown ">
                    <a
                      class="my-auto"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={morevertical} />
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Report User
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Delete Chat
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 w-[100%] h-[2px] mt-[20px]"></div>
              <div className="h-[20rem] flex flex-col justify-end overflow-auto">
                <div className="flex justify-start mt-4">
                  <div className="w-[400px] p-[16px] bg-white rounded-[10px]">
                    This is a dummy text, it is not meant to be read. It is
                    Solely placed here to demonstrate.
                    <p className="text-end">18:12</p>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <div className="w-[400px] p-[16px] bg-primary text-white rounded-[10px]">
                    This is a dummy text, it is not meant to be read. It is
                    Solely placed here to demonstrate.
                    <p className="text-end text-white">18:12</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-3">
                <button className="border-[1.5px] p-[7px] border-blue-500 px-[10px] mr-[7px] bg-white font-medium text-muted rounded-md">
                  Decide Pickup Location
                </button>
                <button className="border-[1.5px] p-[7px] border-blue-500 px-[10px] mr-[7px] bg-white font-medium text-muted rounded-md">
                  Package Weight
                </button>
                <button className="border-[1.5px] p-[7px] border-blue-500 px-[10px] mr-[7px] bg-white font-medium text-muted rounded-md">
                  Create a Custom Offer
                </button>
              </div>

              <div className="mt-3">
                <div className="row">
                  <div className="col-md-3 col-12">
                    <div class="dropdown">
                      <button
                        class="btn bg-primary text-white w-100 h-[53px] dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Create Custom Offer
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Custom Offer Dummy 1
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Custom Offer Dummy 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9 col-12">
                    {" "}
                    <div className="w-100 flex px-[30px] py-[0px] rounded-[10px] mb-3  bg-white">
                      <div className="my-auto">
                        <img src={Search} />
                      </div>

                      <TextField
                        className="w-[100%]"
                        id="outlined-number"
                        placeholder="Search"
                        type="email"
                        InputLabelProps={{
                          shrink: false,
                        }}
                      />
                      <div className="my-auto">
                        <img src={Send} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
