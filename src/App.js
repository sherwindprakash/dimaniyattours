import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React, { Suspense, lazy } from "react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Navbar />
      <div className="container body">
        <Suspense fallback={<div className="loading loading-lg"></div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/en/" />} />
            <Route path="/en" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
