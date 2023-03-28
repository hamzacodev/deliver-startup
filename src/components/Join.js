import React from "react";
import Shap1 from "../assest/join-shap-1.png";
import Shap2 from "../assest/join-shap-2.png";
import Shap3 from "../assest/join-shap-3.png";
import Shap4 from "../assest/join-shap-4.png";
import Email from "../assest/email-icon.png";

const Join = () => {
  return (
    <div className="my-[10%] relative">
      <img className="absolute bottom-[-6rem] right-[4rem]" src={Shap4} />
      <div className="container join-div relative">
        <img className="absolute bottom-[0px] left-[0px]" src={Shap1} />
        <img className="absolute top-[0px] right-[0px]" src={Shap2} />
        <img className="absolute right-m" src={Shap3} />
        <h3 className="md:px-[15%] px-[2%] text-center">
          Join now to get the best travel package service out there ever
          existed!
        </h3>
        <div className="md:flex mt-5">
          <div className="flex bg-white p-3 md:w-[500px] w-[320px] rounded-md">
            <div className="my-auto mr-[10px]">
              <img src={Email} />
            </div>

            <input className="text-black" placeholder="Your email" />
          </div>
          <button className="bg-primary btn font-medium text-light md:w-[150px] w-[100%] md:mx-3">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
