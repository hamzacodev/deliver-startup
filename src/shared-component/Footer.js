import React from "react";
import Logo from "../assest/main-logo.png";
import Socials from "../assest/Social.png";
import Shap from "../assest/footer-shap.png";

const Footer = () => {
  return (
    <div className="relative">
      <img
        className="absolute right-[0px] top-[-50%] opacity-50 h-[29rem] hide-m"
        src={Shap}
      />
      <div className="">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 col-6 mt-3 center-m">
              <img className="w-[130px] mb-4" src={Logo} />
              <p className="text-muted md:w-[80%] mb-4">
                This is dummy copy. It is not me ant to be read. It has
              </p>
            </div>
            <div className="col-lg-2 col-6 mt-3">
              <h4 className="fw-bold mb-3">Company</h4>
              <ul className="font-medium text-muted">
                <li className="pointer mb-1 ">Home</li>
                <li className="pointer mb-1">About Us</li>
                <li className="pointer mb-1">How It Works</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 mt-3">
              <h4 className="fw-bold mb-3">Contact</h4>
              <ul className="font-medium text-muted">
                <li className="pointer mb-1 ">Help/FAQ</li>
                <li className="pointer mb-1">Privacy Policy</li>
                <li className="pointer mb-1">Testimonials</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 mt-3">
              <h4 className="fw-bold mb-3">Contact</h4>
              <ul className="font-medium text-muted">
                <li className="pointer mb-1 ">Testimonials</li>
                <li className="pointer mb-1">Airline</li>
                <li className="pointer mb-1">Low fare tips</li>
              </ul>
            </div>
            <div className="col-lg-3 col-6 mt-3 mt-[-15px]">
              <img className="" src={Socials} />
              <h4 className="fw-bold ">Get in Touch</h4>
              <ul className="font-medium text-muted">
                <li className="pointer mb-1 ">customer.care@domain.com</li>
                <li className="pointer mb-1">000-000-0000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="b-t ">
        <div className="container text-center">
          <p className="mt-3">
            © Copyrights 2023. All Rights Reserved. Designed By Sania Nadeem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
