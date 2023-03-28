import React from "react";
import HeroGB from "../assest/hero-bg.png";
import HeroIMG from "../assest/hero-img.png";
import SpanBG from "../assest/span-bg.png";

// style={{ backgroundImage: `url(${HeroGB})` }}
const Hero = () => {
  return (
    <div>
      <div className="bg-fit ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 my-auto">
              <h4 className="text-primary fw-bold mb-4">
                TRAVEL AND EARN AT THE SAME TIME
              </h4>{" "}
              <h1 className="primary-font ">
                Travel,{" "}
                <span
                  className="span-bg "
                  style={{ backgroundImage: `url(${SpanBG})` }}
                >
                  {" "}
                  enjoy
                </span>{" "}
                and earn a little extra.
              </h1>
              <p className="lg:pr-[5rem] pr-[1rem]">
                This is dummy copy. It is not meant to be read. It has been
                placed here solely to demonstrate the look and feel of finished,
                typeset text.
              </p>
              <div className="mt-4 flex">
                <button className="btn bg-scondary  text-light w-[140px] py-[13px] rounded-[5rem]">
                  Get Started
                </button>
                <button className="text-light bg-primary w-[50px] h-[50px] rounded-circle ml-5">
                  <i class="fas fa-play"></i>
                </button>
                <p className="font-medium my-auto mx-3">Learn How</p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <img src={HeroIMG} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
