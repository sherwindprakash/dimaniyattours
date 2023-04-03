import "./Home_Slider.css";
import React, { useRef, useState } from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper";
// LOAD IMG
import Destination from "./Destination.mp4";
import ShortsTripsV from "./ShortsTrips.mp4";

import ShortsTrips from "./shortstrips.webp";
import MarineService from "./marineservice.webp";
import SpecialOffers from "./specialoffers.webp";

import NEXT from "../../assets/right-arrow-next-svgrepo-com.svg";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        grabCursor={true}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link title="Destination" to="/en/destination/">
            <div className="contHolder">
              <h2>All year long travel</h2>
              <h3>Let's explore all Wondderful Dimaniyat Destinations</h3>
            </div>

            <video
              className="lazy"
              autoPlay
              muted
              loop
              playsInline
              width="100%"
              height="100%"
              src={Destination}
              type="video/mp4"
            ></video>

            {/* <img
              fetchpriority="low"
              height="700"
              width="480"
              alt="Destination"
              title="Destination"
              src={IMG}
            /> */}
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link title="Special Offers" to="/en/special-offers/">
            <div
              className="contHolder"
              style={{
                transform: "rotate(180deg)",
              }}
            >
              <h3
                style={{
                  transform: "rotate(180deg)",
                  marginTop: "20px",
                }}
              >
                Special Offers
              </h3>
              <h2
                style={{
                  transform: "rotate(180deg)",
                }}
              >
                Travel
              </h2>
            </div>
            <img className="Next" alt="Next" title="Next" src={NEXT} />
            <img
              fetchpriority="low"
              height="700"
              width="480"
              alt="Special Offers"
              title="Special Offers"
              src={SpecialOffers}
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link title="Shorts Trips" to="/en/shorts-trips/">
            <div
              className="contHolder"
              style={{
                transform: "rotate(180deg)",
              }}
            >
              <h3
                style={{
                  transform: "rotate(180deg)",
                  marginTop: "20px",
                }}
              >
                Shorts Trips
              </h3>
            </div>
            {/* <img
              fetchpriority="low"
              height="700"
              width="480"
              alt="Gallery"
              title="Shorts Trips"
              src={ShortsTrips}
            /> */}
            <video
              className="lazy"
              autoPlay
              muted
              loop
              playsInline
              width="100%"
              height="100%"
              src={ShortsTripsV}
              type="video/mp4"
            ></video>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link title="Gallery" to="/en/marine-service/">
            <div
              className="contHolder"
              style={{
                transform: "rotate(180deg)",
              }}
            >
              <h3
                style={{
                  transform: "rotate(180deg)",
                  marginTop: "20px",
                }}
              >
                Marine Service
              </h3>
            </div>
            <img
              fetchpriority="low"
              height="700"
              width="480"
              alt="Marine Service"
              title="Marine Service"
              src={MarineService}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
