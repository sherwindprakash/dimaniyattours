import React, { useEffect } from "react";
import "./MarineService.css";
import Form from "../../components/Form/From";

import IMG1 from "./images/MarineService1.webp";
import IMG2 from "./images/MarineService2.webp";
import IMG3 from "./images/MarineService3.webp";

export default function Shorts_Trips() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | Marine Service`;
  });

  return (
    <>
      <div className="MarineService">
        <h1>Marine Service</h1>
        <div className="AboutHolder">
          <div className="ContntHolderAU">
            Was founded in 2013. The company’s main office is situated in Muscat
            and we have an office brunch in The Special Economic Zone at Duqm
            (SEZAD). We offer a diverse portfolio of products and top-quality
            services focused in the marine industry. We are one of the SME’s
            companies. We are proud to be unique in every service we provide to
            our prestigious customers and at the same time we are glad that we
            have the ability to respond quickly to ever-changing market. We
            offer tailor-made packages to meet our client’s specific needs.
          </div>

          <div className="Holder">
            <h2>Services Offered</h2>
            <div>We provide directly or through subcontracts:</div>

            <div className="ImageHolder">
              <img
                fetchpriority="low"
                height="300"
                width="300"
                alt="About us"
                title="About us"
                src={IMG1}
                className="myImg"
              />
              <img
                fetchpriority="low"
                height="300"
                width="300"
                alt="About us"
                title="About us"
                src={IMG2}
                className="myImg"
              />
              <img
                fetchpriority="low"
                height="300"
                width="300"
                alt="About us"
                title="About us"
                src={IMG3}
                className="myImg"
              />
            </div>

            <div className="RawDiv">
              <div className="SingleHolderMS">
                <h3>Custom clearing</h3>
                <ul>
                  <li>Well experienced licensed Omani Stuffs.</li>
                </ul>
              </div>
              <div className="SingleHolderMS">
                <h3>Marine service:</h3>
                <ul>
                  <li>Ship chartering & Chandelling</li>
                  <li>Sewage service</li>
                  <li>Provide rescue boats</li>
                  <li>Diving</li>
                  <li>Supply spare parts</li>
                  <li>Food provision</li>
                  <li>Mooring ropes</li>
                  <li>Crew Manning & Management</li>
                  <li>Draft server</li>
                </ul>
              </div>
              <div className="SingleHolderMS">
                <h3>Ship Agent</h3>
                <ul>
                  <li>
                    We ensure that your vessels and crew receive personalized
                    care. As your solutions provider from sea to port, we create
                    value for your assets and act as your local representative.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            style={{
              display: "inline-block",
              fontSize: "18px",
              marginTop: "50px",
              border: "1px solid",
              padding: "5px",
              borderRadius: "5px",
            }}
            title="Request a call back from us"
            href="#callback"
          >
            Request a call back from us
          </a>

          {/* POP */}
          <div className="modal" id="callback">
            <a className="modal-overlay" href="#close" aria-label="Close"></a>
            <div className="modal-container" role="document">
              <div className="modal-header">
                <a
                  className="btn btn-clear float-right"
                  href="#close"
                  aria-label="Close"
                ></a>
                <div className="modal-title">Request a call back from us</div>
              </div>
              <div className="modal-body">
                <div className="content">
                  <Form name={"marine_service"} />
                </div>
              </div>
              <div className="modal-footer">
                <a className="btn btn-link" href="#close">
                  &times;
                </a>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
