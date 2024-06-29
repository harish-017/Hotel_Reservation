import React from "react";

import HeroSlider from "../components/HeroSlider";
import BookForm from "../components/BookForm";
import Rooms from "./Rooms";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="container mx-auto relative">
        <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:top-0 lg:p-0 lg:z-30">
          <BookForm />
        </div>

        {/* <Rooms /> */}
      </div>
    </>
  );
};

export default Home;
