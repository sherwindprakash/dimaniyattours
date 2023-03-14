import { Link } from "react-router-dom";
import "./Home_Accordion.css";
import background_Story from "../../assets/Story/our-story.jpg";
import background_OurWork from "../../assets/OurWork/homepage-_Expanded_work.jpg";

export default function App() {
  return (
    <>
      {/* Services */}
      <div
        className="accordion"
        style={{
          //   backgroundImage: `url(${background})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center left",
          background: "#dc3636",
          color: "#fff",
        }}
      >
        <input
          type="checkbox"
          id="accordion-Services"
          name="accordion-checkbox"
          hidden
        />
        <label
          className="accordion-header"
          htmlFor="accordion-Services"
          title="Services"
        >
          Services
          <i
            className="icon icon-arrow-down"
            style={{
              marginLeft: "20px",
            }}
          ></i>
        </label>
        <div className="accordion-body">
          <div className="Half-Block">
            The essence of integrating your communications is to approach any
            problem with an open mind and no preconceptions. To do this, we have
            a tool bag of specific skill sets to hand to find the right
            combination of solutions.
            <div className="Seperater">
              <Link
                rel="canonical"
                title="Learn more - Services"
                to="/en/services"
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Story */}
      <div
        className="accordion"
        style={{
          backgroundImage: `url(${background_Story})`,
          //   background: "#dc3636",
          backgroundSize: "cover",
          backgroundPosition: "center left",
          color: "#fff",
        }}
      >
        <input
          type="checkbox"
          id="accordion-Story"
          name="accordion-checkbox"
          hidden
        />
        <label
          className="accordion-header"
          htmlFor="accordion-Story"
          title="Story"
        >
          Story
          <i
            className="icon icon-arrow-down"
            style={{
              marginLeft: "20px",
            }}
          ></i>
        </label>
        <div className="accordion-body">
          <div className="Half-Block">
            Zeenah first opened its doors back in 2003 with a small team and big
            ambitions. Since then the agency has grown from strength to
            strength, and expanded to offer expertise across the full range of
            communication disciplines and channels.
            <div className="Seperater">
              <Link rel="canonical" title="Learn more - Story" to="/en/story">
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Our Work */}
      <div
        className="accordion"
        style={{
          backgroundImage: `url(${background_OurWork})`,
          //   background: "#dc3636",
          backgroundSize: "cover",
          backgroundPosition: "center left",
          color: "#fff",
        }}
      >
        <input
          type="checkbox"
          id="accordion-OurWork"
          name="accordion-checkbox"
          hidden
        />
        <label
          className="accordion-header"
          htmlFor="accordion-OurWork"
          title="Our Work"
        >
          Our Work
          <i
            className="icon icon-arrow-down"
            style={{
              marginLeft: "20px",
            }}
          ></i>
        </label>
        <div className="accordion-body">
          <div className="Half-Block">
            Zeenah first opened its doors back in 2003 with a small team and big
            ambitions. Since then the agency has grown from strength to
            strength, and expanded to offer expertise across the full range of
            communication disciplines and channels.
            <div className="Seperater">
              <Link
                rel="canonical"
                title="Learn more - Our Work"
                to="/en/our-work"
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* people */}
      <div
        className="accordion"
        style={{
          //   backgroundImage: `url(${background_People})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center left",
          color: "#fff",
          background: "#323337",
        }}
      >
        <input
          type="checkbox"
          id="accordion-People"
          name="accordion-checkbox"
          hidden
        />
        <label
          className="accordion-header"
          htmlFor="accordion-People"
          title="People"
        >
          People
          <i
            className="icon icon-arrow-down"
            style={{
              marginLeft: "20px",
            }}
          ></i>
        </label>
        <div className="accordion-body">
          <div className="Half-Block">
            We are a people business. One that always offers a unique
            perspective based on local insight and international know-how.
            Always challenging convention and norms, but respecting tradition
            and culture. We are wise heads on young shoulders.
            <div className="Seperater">
              <Link rel="canonical" title="Learn more - People" to="/en/people">
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Work With Us */}
      <div
        className="accordion"
        style={{
          //   backgroundImage: `url(${background_People})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center left",
          color: "#fff",
          background: "#dc3636",
        }}
      >
        <input
          type="checkbox"
          id="accordion-WorkWithUs"
          name="accordion-checkbox"
          hidden
        />
        <label
          className="accordion-header"
          htmlFor="accordion-WorkWithUs"
          title="Work With Us"
        >
          Work With Us
          <i
            className="icon icon-arrow-down"
            style={{
              marginLeft: "20px",
            }}
          ></i>
        </label>
        <div className="accordion-body">
          <div className="Half-Block">
            We are a people business. One that always offers a unique
            perspective based on local insight and international know-how.
            Always challenging convention and norms, but respecting tradition
            and culture. We are wise heads on young shoulders.
            <div className="Seperater">
              <Link
                rel="canonical"
                title="Learn more - Careers Page"
                to="/en/work-with-us"
              >
                Careers Page
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us */}
      <div
        className="accordion"
        style={{
          //   backgroundImage: `url(${background_People})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center left",
          color: "#323337",
          background: "#fff",
        }}
      >
        <input
          type="checkbox"
          id="accordion-Contact"
          name="accordion-checkbox"
          hidden
        />
        <label
          className="accordion-header"
          htmlFor="accordion-Contact"
          title="Contact"
        >
          Contact
          <i
            className="icon icon-arrow-down-white"
            style={{
              marginLeft: "20px",
            }}
          ></i>
        </label>
        <div className="accordion-body">
          <div className="Half-Block">
            From big-budget cinema films to multi-page newspaper spreads or
            regular social media updates, we can ensure your audience always has
            an appetite for what you have to say.
            <div className="Seperater">
              <a
                href=" https://www.google.com/maps?q=ZEENAH,+Al+Inshirah+St,+Muscat&amp;um=1&amp;ie=UTF-8&amp;sa=X&amp;ved=0ahUKEwjAk6eek4naAhUHCewKHd7JAjMQ_AUICygC"
                target="_blank"
              >
                <svg
                  version="1.1"
                  id="mpa-icon"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                >
                  <g>
                    <g>
                      <path
                        className="st0"
                        d="M30,3.5c9.6,0,17.9,6.9,19.8,16.2c0.8,3.9,0.2,7.5-1.4,11c-2,4.6-4.7,8.7-7.5,12.8C37.8,47.8,34.5,52,31,56
c-0.6,0.7-1.3,0.7-1.8,0.1c-5.5-6.3-10.6-12.8-14.8-20c-1.7-2.9-3.2-5.8-4-9.1c-1-3.8-0.4-7.6,1.1-11.2C14.6,8.3,21.9,3.5,30,3.5z
M30,53.8c0.2-0.2,0.3-0.3,0.4-0.5c2.6-3.2,5.2-6.4,7.6-9.7c3.1-4.1,5.9-8.4,8.1-13.1c1.5-3.2,2.3-6.4,1.7-10
C46.2,11,36.9,4.2,27.2,5.8C20.4,7,15.7,10.9,13.2,17.3c-1.1,2.8-1.5,5.7-0.9,8.6c0.5,2.4,1.6,4.7,2.7,6.9
c2.7,5.2,6.1,9.9,9.7,14.5C26.4,49.5,28.2,51.7,30,53.8z"
                      ></path>
                      <path
                        className="st1"
                        d="M30,57.5c-0.4,0-1-0.1-1.6-0.8c-6.5-7.4-11.2-13.8-14.9-20.2c-1.4-2.4-3.2-5.7-4.1-9.3
c-1-3.7-0.6-7.6,1.2-11.8C13.8,7.6,21.5,2.5,30,2.5c10.1,0,18.8,7.2,20.8,17c0.8,3.8,0.3,7.6-1.5,11.6c-1.8,4-4.1,8-7.6,13
c-3,4.2-6.3,8.4-10,12.6C31.1,57.3,30.4,57.5,30,57.5z M30,4.5c-7.8,0-14.7,4.6-17.6,11.7c-1.6,3.8-1.9,7.2-1.1,10.5
c0.9,3.4,2.5,6.5,3.9,8.8c3.6,6.2,8.3,12.5,14.7,19.9c0.1,0.1,0.1,0.1,0.1,0.1c0,0,0.1-0.1,0.2-0.2c3.6-4.1,6.9-8.3,9.8-12.4
c3.4-4.9,5.7-8.7,7.4-12.6c1.6-3.6,2-7,1.3-10.4C47.1,11,39.2,4.5,30,4.5z M29.9,55.4l-0.7-0.9c-0.6-0.7-1.1-1.4-1.7-2.1
C26.3,51,25.1,49.5,24,48c-3-3.8-6.8-8.9-9.8-14.6c-1.1-2-2.2-4.4-2.8-7.2c-0.6-3-0.3-6.1,0.9-9.2c2.7-6.8,7.7-10.9,14.9-12.1
c1-0.2,2-0.3,3.1-0.3c9.1,0,17.1,6.8,18.6,15.9c0.6,3.4,0,6.8-1.8,10.6c-2,4.3-4.6,8.5-8.2,13.3c-1.7,2.3-3.6,4.6-5.3,6.8
c-0.8,1-1.5,1.9-2.3,2.9c-0.1,0.1-0.2,0.2-0.3,0.3L29.9,55.4z M30.1,6.6c-0.9,0-1.8,0.1-2.7,0.2C21,7.9,16.5,11.6,14.1,17.7
c-1.1,2.8-1.4,5.5-0.8,8.1c0.5,2.5,1.6,4.8,2.6,6.7c3,5.6,6.7,10.6,9.6,14.3c1.2,1.5,2.3,2.9,3.5,4.4c0.3,0.4,0.6,0.8,0.9,1.1
c0.6-0.8,1.3-1.6,1.9-2.4c1.8-2.2,3.6-4.5,5.3-6.7c3.5-4.7,6.1-8.8,8-12.9c1.6-3.4,2.1-6.4,1.6-9.4C45.5,12.7,38.3,6.6,30.1,6.6z"
                      ></path>
                    </g>
                    <g>
                      <path
                        className="st0"
                        d="M20.5,23.6c0-5.3,4.3-9.5,9.5-9.5c5.3,0,9.6,4.3,9.5,9.6c0,5.3-4.3,9.5-9.6,9.5
C24.7,33.2,20.5,28.9,20.5,23.6z M30,31c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.4-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4
C22.6,27.7,25.9,31.1,30,31z"
                      ></path>
                      <path
                        className="st1"
                        d="M30,34.2L30,34.2c-5.8,0-10.5-4.7-10.5-10.5c0-5.8,4.7-10.5,10.5-10.5c2.8,0,5.5,1.1,7.5,3.1
c2,2,3.1,4.7,3.1,7.5C40.5,29.5,35.8,34.2,30,34.2z M30,15.1c-4.7,0-8.5,3.8-8.5,8.5c0,4.7,3.8,8.5,8.5,8.6l0,1v-1
c4.7,0,8.5-3.8,8.5-8.5c0-2.3-0.9-4.4-2.5-6.1C34.5,16,32.3,15.1,30,15.1z M30,32c-2.3,0-4.4-0.9-6-2.5c-1.6-1.6-2.5-3.7-2.5-5.9
c0-4.6,3.8-8.4,8.4-8.4h0c2.2,0,4.4,0.9,6,2.5c1.6,1.6,2.5,3.7,2.5,6C38.4,28.3,34.7,32,30,32z M30,16.2l0,1
c-3.5,0-6.4,2.9-6.4,6.4c0,1.7,0.7,3.3,1.9,4.5c1.2,1.2,2.8,1.9,4.6,1.9c3.6,0,6.4-2.9,6.4-6.4c0-1.7-0.7-3.3-1.9-4.5
c-1.2-1.2-2.8-1.9-4.5-1.9V16.2z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              <Link
                rel="canonical"
                className="contact-us-link"
                title="Learn more - Contact"
                to="/en/get-in-touch"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
