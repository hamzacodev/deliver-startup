import React from "react";
import Shap1 from "../assest/book-1.png";
import Shap2 from "../assest/book-2.png";
import Shap3 from "../assest/book-3.png";
import Shap4 from "../assest/book-4.png";
import BookIMG from "../assest/book-img.png";

const BookCard = [
  {
    id: 1,
    icone: Shap1,
    title: "Join Our Platform",
    text: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
    after: (
      <div className="book-after border-[1.5px] border-dashed border-[#FF0076]"></div>
    ),
  },
  {
    id: 1,
    icone: Shap2,
    title: "Find a Traveler",
    text: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
    after: (
      <div className="book-after border-[1.5px] border-dashed border-[#53EDD1]"></div>
    ),
  },
  {
    id: 1,
    icone: Shap3,
    title: "Place A Request To Carry",
    text: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
    after: (
      <div className="book-after border-[1.5px] border-dashed border-[#F1A501]"></div>
    ),
  },
  {
    id: 1,
    icone: Shap4,
    title: "Get Your Desired Item",
    text: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
    after: <div></div>,
  },
];
const BookEasy = () => {
  return (
    <div className="mt-[5%]">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h4 className="text-muted mb-3">Easy and Fast</h4>
            <h2 className="primary-font mb-[5%]">
              Book your next Space in 4 easy steps
            </h2>

            <div className="row ">
              {BookCard.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="col-lg-12 col-sm-6 col-12 flex"
                    >
                      <div className="flex flex-col items-center">
                        <img className="w-[80px]" src={item.icone} />
                        {item.after}
                      </div>
                      <div className="px-[20px]">
                        <h4 className="text-[#5E6282] fw-bold">{item.title}</h4>
                        <p className="lg:pr-[7rem] pr-[2rem]">{item.text}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <img className="w-100" src={BookIMG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookEasy;
