import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React, { Suspense, lazy } from "react";

import Head from "./Head/Head";
import Footer from "./Footer/Footer";

const Home = lazy(() => import("./Pages/Home/Home"));
const Package = lazy(() => import("./Pages/Package/Package"));
const Destination = lazy(() => import("./Pages/Destination/Destination"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

function App() {
  return (
    <>
      <Head />
      <div className="container body">
        <Suspense fallback={<div className="loading loading-lg"></div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/en/" />} />
            <Route path="/en/" element={<Home />} />
            <Route path="/en/package/" element={<Package />} />
            <Route path="/en/destination/" element={<Destination />} />
            <Route path="/en/gallery/" element={<Gallery />} />
            <Route path="/en/contact/" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
