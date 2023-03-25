import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React, { Suspense, lazy } from "react";

import Head from "./Head/Head";
import Footer from "./Footer/Footer";

import Facebook from "./assets/SM/facebook-round-svgrepo-com.svg";
import Instagram from "./assets/SM/instagram-round-svgrepo-com.svg";
import Tripadvisor from "./assets/SM/tripadvisor-logotype-svgrepo-com.svg";

import FacebookD from "./assets/SM/Dark_Mode/facebook-round-svgrepo-com.svg";
import InstagramD from "./assets/SM/Dark_Mode/instagram-round-svgrepo-com.svg";
import TripadvisorD from "./assets/SM/Dark_Mode/tripadvisor-logotype-svgrepo-com.svg";

const Home = lazy(() => import("./Pages/Home/Home"));
const Package = lazy(() => import("./Pages/Package/Package"));
const PackageSingle = lazy(() => import("./Pages/Package/Single"));
const Destination = lazy(() => import("./Pages/Destination/Destination"));
const Aboutus = lazy(() => import("./Pages/Aboutus/Aboutus"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const SpecialOffers = lazy(() => import("./Pages/SpecialOffers/SpecialOffers"));
const User = lazy(() => import("./Pages/User/User"));
const ShortsTrips = lazy(() => import("./Pages/Shorts_Trips/Shorts_Trips"));
const MarineService = lazy(() => import("./Pages/MarineService/MarineService"));




function App() {
  return (
    <>
      <Head />
      <div className="container body">
        <div className="EazyContact">
          <div className="sub">
            <a href="mailto:info@dimaniyattours.om">info@dimaniyattours.om</a>
          </div>
          <div className="sub">
            <a href="tel:+968 9919 9908">+968 9919 9908</a>
          </div>
          <div className="SM">
            <picture>
              <source srcSet={FacebookD} media="(prefers-color-scheme: dark)" />
              <img
                loading="lazy"
                width="40"
                height="40"
                alt="Dimaniyat Tours | Facebook"
                title="Dimaniyat Tours | Facebook"
                src={Facebook}
                className="icon"
              />
            </picture>

            <picture>
              <source
                srcSet={InstagramD}
                media="(prefers-color-scheme: dark)"
              />
              <img
                loading="lazy"
                width="40"
                height="40"
                alt="Dimaniyat Tours | Instagram"
                title="Dimaniyat Tours | Instagram"
                src={Instagram}
                className="icon"
              />
            </picture>

            <picture>
              <source
                srcSet={TripadvisorD}
                media="(prefers-color-scheme: dark)"
              />
              <img
                loading="lazy"
                width="40"
                height="40"
                alt="Dimaniyat Tours | Tripadvisor"
                title="Dimaniyat Tours | Tripadvisor"
                src={Tripadvisor}
                className="icon"
              />
            </picture>
          </div>
        </div>
        <div className="Page">
          <Suspense fallback={<div className="loading loading-lg"></div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/en/" />} />
              <Route path="/en/" element={<Home />} />
              <Route path="/en/packages/" element={<Package />} />
              <Route path="/en/packages/:slug/" element={<PackageSingle />} />
              <Route path="/en/destination/" element={<Destination />} />
              <Route path="/en/about-us/" element={<Aboutus />} />
              <Route path="/en/contact/" element={<Contact />} />
              <Route path="/en/special-offers/" element={<SpecialOffers />} />
              <Route path="/en/user/" element={<User />} />
              <Route path="/en/shorts-trips/" element={<ShortsTrips />} />
              <Route path="/en/marine-service/" element={<MarineService />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
