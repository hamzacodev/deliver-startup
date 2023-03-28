import React from "react";
import HeroGB from "../assest/hero-bg.png";
import IMG from "../assest/img-4.png";
import InfiniteCarousel from "react-leaf-carousel";
import { Avatar } from "@mui/material";
import Slider from "react-slick";
import "../assest/slick/slick.css";
import "../assest/slick/slick-theme.css";

const TestimonailsCard = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    text: "Ok so here it goes and even though I don't know where to start from, Big Thank you to the entire team whose idea flattered me.",
    name: "Michelle Indrias",
    address: "Islamabad, Pakistan",
  },
  {
    id: 2,
    image:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=836",
    text: " don't know where to start from, Big Thank you to the entire team whose idea flattered me.",
    name: "Michelle Indrias",
    address: "Islamabad, Pakistan",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    text: "Ok so here it goes and even though I don't know where to start from, Big Thank you to the entire team whose idea flattered me.",
    name: "Michelle Indrias",
    address: "Islamabad, Pakistan",
  },
];

const Testimonails = () => {
  const settings = {
    centerPadding: "60px",
    speed: 300,
    adaptiveHeight: true,
    centerPadding: "60px",
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="bg-fit my-[5%]">
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h4 className="mb-3 fw-bold text-muted">Testimonials</h4>
            <h2 className="primary-font lg:pr-[27%]">
              What people say about Us.
            </h2>
          </div>

          <div className="col-md-6 col-12">
            <div className="p-[1rem] mt-[0.6rem] h-[20rem] testimonial-m">
              <Slider {...settings}>
                {TestimonailsCard.map((item) => {
                  return (
                    <>
                      <div className="" key={item.id}>
                        <div>
                          <Avatar
                            sx={{ width: 56, height: 56 }}
                            className="w-[100px]"
                            src={item.image}
                          />
                        </div>
                        <div className="card p-[25px]  ml-[2.5rem] ">
                          <p className="mb-4">{item.text}</p>
                          <h4 className="fw-bold text-[#5E6282]">
                            {item.name}
                          </h4>
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
