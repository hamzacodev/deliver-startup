import React from "react";
import BookEasy from "../components/BookEasy";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Offer from "../components/Offer";
import Testimonails from "../components/Testimonails";
import Footer from "../shared-component/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Offer />
      <BookEasy />
      <Testimonails />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
