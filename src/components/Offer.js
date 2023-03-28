import React from "react";
import OfferShap from "../assest/offer-shap-1.png";
import OfferShap2 from "../assest/offer-shap-2.png";
import Shap1 from "../assest/shap-1.png";
import Shap2 from "../assest/shap-2.png";
import Shap3 from "../assest/shap-3.png";
import Shap4 from "../assest/shap-4.png";

const Offer = () => {
  return (
    <div className="relative mt-[5%]">
      <img
        className="absolute top-[-10px] right-[20px] w-[200px]"
        src={OfferShap}
      />
      <div className="container">
        <div className="text-center mb-[7%]">
          <p>WHAT WE DO</p>
          <h2 className="primary-font">We Offer Best Services</h2>
        </div>

        <div className="row">
          {/* shap  */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="flex flex-col items-center px-[2%] shap-hover">
              <img className="w-[100px]" src={Shap1} />
              <h4>Anything Anywhere</h4>
              <p className="text-center mt-3">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
          </div>

          {/* shap  */}
          <div className="col-lg-3 col-sm-6 col-12  ">
            <div className="flex flex-col items-center px-[2%] shap-hover ">
              <img className="w-[100px]" src={Shap2} />
              <h4>On-Time Delivery</h4>
              <p className="text-center mt-3">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          </div>
          {/* shap  */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="flex flex-col items-center px-[2%] shap-hover">
              <img className="w-[100px]" src={Shap3} />
              <h4>0% Cost</h4>
              <p className="text-center mt-3">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </p>
            </div>
          </div>
          {/* shap  */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="flex flex-col items-center px-[2%] shap-hover">
              <img className="w-[100px]" src={Shap4} />
              <h4>100% Risk Free</h4>
              <p className="text-center mt-3">
                We deliver outsourced aviation services for military customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
