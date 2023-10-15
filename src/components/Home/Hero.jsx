import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from "../../assets/index";

const Hero = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img priority="true" src={bannerImgOne} alt="sliderImage" />
        </div>
        <div>
          <img src={bannerImgTwo} alt="sliderImage" />
        </div>
        <div>
          <img src={bannerImgThree} alt="sliderImage" />
        </div>
        <div>
          <img src={bannerImgFour} alt="sliderImage" />
        </div>
        <div>
          <img src={bannerImgFive} alt="sliderImage" />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Hero;
