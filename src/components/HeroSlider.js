import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

import "swiper/css";

const slides = [
  {
    title: "Your luxury Hotel for vacation",
    bg: Img1,
    btnText: "See our rooms",
  },
  {
    title: "Your luxury Hotel for vacation",
    bg: Img2,
    btnText: "See our rooms",
  },
  {
    title: "Your luxury Hotel for vacation",
    bg: Img3,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-screen  w-full"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide className="relative h-full w-full flex justify-center items-center ">
            <div className="z-20 text-white text-center">
              <p>See our rooms</p>
              <h1 className="text-[32px] lg:text-[68px] max-w-[920px] font-teritary tracking-[5px] mb-6 uppercase">
                {slide.title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                {slide.btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full z-0">
              <img src={slide.bg} alt="" />
            </div>

            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
