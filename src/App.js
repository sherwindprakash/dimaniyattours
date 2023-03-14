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
const Contact = lazy(() => import("./pages/Contact"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));
// Work Load
const OurWork = lazy(() => import("./pages/OurWork"));
const Integrated_experience_oman = lazy(() =>
  import("./pages/OurWork/integrated/experience-oman")
);
//
const People = lazy(() => import("./pages/People"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Services = lazy(() => import("./pages/Services"));
const Story = lazy(() => import("./pages/Story"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const WorkWithUs = lazy(() => import("./pages/WorkWithUs"));

function App() {
  return (
    <>
      <Navbar />
      <div className="container body">
        <Suspense fallback={<div className="loading loading-lg"></div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/en/" />} />

            <Route path="/en" element={<Home />} />
            <Route path="/en/get-in-touch" element={<Contact />} />
            <Route path="/en/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/en/our-work" element={<OurWork />} />
            {/* Work Path */}
            <Route
              path="/en/our-work/integrated/experience-oman"
              element={<Integrated_experience_oman />}
            />
            <Route path="/en/people" element={<People />} />
            <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/en/services" element={<Services />} />
            <Route path="/en/story" element={<Story />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/en/work-with-us" element={<WorkWithUs />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
