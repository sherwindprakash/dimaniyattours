import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./Slider.css";

import Img01 from "../../assets/Home/Award-Winning-Integrated-Marketing-Agency-in-Oman-web-design-agency-Oman.jpg";
import Img02 from "../../assets/Home/Dhofar-Automotive-launch-state-of-the-art-dealership-Wattayahsocial-media-management-agency-muscat.jpg";
import Img03 from "../../assets/Home/MuscatBay-bring-harmony-spaciousness-to-life-web-design-company-Oman.jpg";
import Img04 from "../../assets/Home/Omantel-super-fast-home-broadband-Ahmad-Al-Harthy.jpg";
import Img05 from "../../assets/Home/Saraya-Bandar-Jissah-spacious-luxury-homes-website-development-agency-muscat.jpg";

// import required modules
import { EffectCreative } from "swiper";

export default function App() {
  const swiperRef = useRef();

  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-50%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <video
            className="HomeVideo"
            width="100%"
            height="auto"
            autoPlay
            controls
            muted
          >
            <source
              src="https://www.zeenah.com/video/Zeenah_2019_HR.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Award-Winning-Integrated-Marketing-Agency-in-Oman-web-design-agency-Oman"
            title="Award-Winning-Integrated-Marketing-Agency-in-Oman-web-design-agency-Oman"
            src={Img01}
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Dhofar-Automotive-launch-state-of-the-art-dealership-Wattayahsocial-media-management-agency-muscat"
            title="Dhofar-Automotive-launch-state-of-the-art-dealership-Wattayahsocial-media-management-agency-muscat"
            src={Img02}
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            title="MuscatBay-bring-harmony-spaciousness-to-life-web-design-company-Oman"
            alt="MuscatBay-bring-harmony-spaciousness-to-life-web-design-company-Oman"
            src={Img03}
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            title="Omantel-super-fast-home-broadband-Ahmad-Al-Harthy"
            alt="Omantel-super-fast-home-broadband-Ahmad-Al-Harthy"
            src={Img04}
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            title="Saraya-Bandar-Jissah-spacious-luxury-homes-website-development-agency-muscat"
            alt="Saraya-Bandar-Jissah-spacious-luxury-homes-website-development-agency-muscat"
            src={Img05}
            width="100%"
            height="auto"
          />
        </SwiperSlide>

        <div className="Arrow-Holder">
          <a
            href="#"
            title="slide Prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none">
              <path
                opacity="0.1"
                d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                fill="#323232"
              />
              <path
                d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                stroke="#323232"
                strokeWidth="2"
              />
              <path
                d="M8 12L16 12"
                stroke="#323232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 9L8.08704 11.913V11.913C8.03897 11.961 8.03897 12.039 8.08704 12.087V12.087L11 15"
                stroke="#323232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#"
            title="slide Next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none">
              <path
                opacity="0.1"
                d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                fill="#323232"
              />
              <path
                d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                stroke="#323232"
                strokeWidth="2"
              />
              <path
                d="M16 12L8 12"
                stroke="#323232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9"
                stroke="#323232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </Swiper>
    </>
  );
}
