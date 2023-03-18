import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Package.css";

import Time from "../../assets/time-svgrepo-com.svg";
import TimeWhite from "../../assets/time-svgrepo-com-white.svg";

import MAP from "../../assets/compass-2-svgrepo-com.svg";
import MAPW from "../../assets/compass-2-svgrepo-com-White.svg";
import COMMNT from "../../assets/comment-material-2-svgrepo-com.svg";
import COMMNTW from "../../assets/comment-material-2-svgrepo-com-White.svg";
import EMAIL from "../../assets/message-mail-svgrepo-com.svg";
import EMAILW from "../../assets/message-mail-svgrepo-com-White.svg";


function PackageSingle() {

  
  
  //   function handleChange(event) {
  //     console.log(event.target.value);
  //   }

  const [value3, setValue3] = React.useState(false);

  const handleChange3 = (e) => {
    setValue3(!value3);
    setValue3(e.target.value);
    console.log("Value 3", e.target.value);

  };


  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  let params = useParams();

  const [post, setPost] = React.useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost/admin/api/collections/get/package?token=22f8709abba293936facc262597237&filter[title_slug]=" +
          params.slug,
        {
          method: "get",
          headers: { "Content-Type": "application/json" },
        }
      );
      await response
        .json()

        .then(function (response) {
          console.log("Package Single", response.entries[0]);
          setPost(response.entries[0]);
        });
    };
    fetchData();
  }, []);

  if (!post) return null;

  return (
    <>
      <div className="PakageSingleBlock">
        <div className="LeftHolder">
          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="700"
            width="480"
            alt={post.title}
            title={post.title}
            src={`http://localhost/admin/storage/uploads/` + post.image.path}
            style={{
              marginBottom: "30px",
            }}
          />
        </div>
        <div className="BodyHolder">
          <h2>{post.title}</h2>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {post.content}
          </div>

          {/* Timing */}
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              <picture>
                <source
                  srcSet={TimeWhite}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  className="timeImage"
                  fetchpriority="low"
                  height="40"
                  width="40"
                  alt="Time Icon"
                  title="Time Icon"
                  src={Time}
                />
              </picture>
              Trip Timing
            </div>
            <div className="timing">
              {post.timing &&
                post.timing.map((item, index) => {
                  return (
                    <>
                      <ul>
                        <li key={index}>{item.value.timing}</li>
                      </ul>
                    </>
                  );
                })}
              {/* Quick links */}
              <div className="QuickLinks">
                {post.map ? (
                  <div className="QLinkInsideDivs">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                      href={post.map}
                      target="_blank"
                      title="Google Map"
                    >
                      <picture>
                        <source
                          srcSet={MAPW}
                          media="(prefers-color-scheme: dark)"
                        />
                        <img
                          className="timeImage"
                          fetchpriority="low"
                          height="40"
                          width="40"
                          alt="Time Icon"
                          title="Time Icon"
                          src={MAP}
                        />
                      </picture>

                      <figcaption>Google Map</figcaption>
                    </a>
                  </div>
                ) : (
                  <div></div>
                )}

                <div className="QLinkInsideDivs">
                  <a
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                    title="Give Your comment"
                    href="#comment"
                  >
                    <picture>
                      <source
                        srcSet={COMMNTW}
                        media="(prefers-color-scheme: dark)"
                      />
                      <img
                        className="timeImage"
                        fetchpriority="low"
                        height="40"
                        width="40"
                        alt="Comment Icon"
                        title="Comment Icon"
                        src={COMMNT}
                      />
                    </picture>
                    <figcaption>Give your comment</figcaption>
                  </a>
                  {/* POP */}
                  <div className="modal" id="comment">
                    <a
                      className="modal-overlay"
                      href="#close"
                      aria-label="Close"
                    ></a>
                    <div className="modal-container" role="document">
                      <div className="modal-header">
                        <a
                          className="btn btn-clear float-right"
                          href="#close"
                          aria-label="Close"
                        ></a>
                        <div className="modal-title">Modal title</div>
                      </div>
                      <div className="modal-body">
                        <div className="content">
                          <p>This is the content inside the modal.</p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <a className="btn btn-link" href="#close">
                          Close
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="QLinkInsideDivs">
                  <a
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                    title="Inquary"
                    href="#Inquary"
                  >
                    <picture>
                      <source
                        srcSet={EMAILW}
                        media="(prefers-color-scheme: dark)"
                      />
                      <img
                        className="timeImage"
                        fetchpriority="low"
                        height="40"
                        width="40"
                        alt="Email Icon"
                        title="Email Icon"
                        src={EMAIL}
                      />
                    </picture>
                    <figcaption>Inquary</figcaption>
                  </a>
                  {/* POP */}
                  <div className="modal" id="Inquary">
                    <a
                      className="modal-overlay"
                      href="#close"
                      aria-label="Close"
                    ></a>
                    <div className="modal-container" role="document">
                      <div className="modal-header">
                        <a
                          className="btn btn-clear float-right"
                          href="#close"
                          aria-label="Close"
                        ></a>
                        <div className="modal-title">Modal title</div>
                      </div>
                      <div className="modal-body">
                        <div className="content">
                          <p>This is the content inside the modal.</p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <a className="btn btn-link" href="#close">
                          Close
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          {/* Get Value */}
          <div className="GenValue">
            <div className="SingleH">
              <div>
                {post.price_adults}&nbsp;OMR&nbsp;<small>(Per Adult)</small>
              </div>
              <div>
                <label htmlFor="Quantity Adult">Quantity</label>
                <input
                  id="Quantity Adult"
                  className="InputDesign"
                  type="number"
                  name="price_adults"
                  onChange={handleChange}
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <div className="SingleH">
              <div>
                {post.price_kids}&nbsp;OMR&nbsp;<small>(Per Kid)</small>
              </div>
              <div>
                <label htmlFor="Quantity Kid">Quantity</label>
                <input
                  id="Quantity Kid"
                  className="InputDesign"
                  type="number"
                  name="price_adults"
                  onChange={handleChange2}
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <small className="SmallNote">
              * Please input your person count
            </small>
          </div>
          {/* Totals */}
          <div className="TotalHolder">
            Total {value * post.price_adults + value2 * post.price_kids} OMR
          </div>
          {/* Travel add-ons and extras */}
          <div
            style={{
              width: "100%",
            }}
          >
            <div className="Details">
              Travel add-ons and extras{" "}
              <small
                style={{
                  fontSize: "14px",
                }}
              >
                (Optional)
              </small>
            </div>
            <div className="availability">
              {post.additional &&
                post.additional.map((item, index) => {
                  return (
                    <>
                      <div className="HHH" key={index}>
                        <div
                          style={{
                            position: "relative",
                          }}
                        >
                          <label>
                            <input
                              type="radio"
                              //checked={value3}
                              value={item.value.price}
                              onChange={handleChange3}
                            />
                            <img
                              className="travelImage"
                              fetchpriority="low"
                              height="300"
                              width="300"
                              alt={item.value.name}
                              title={item.value.name}
                              src={
                                `http://localhost/admin/storage/uploads/` +
                                item.value.image.path
                              }
                            />
                          </label>
                        </div>
                        <p>{item.value.name}</p>
                      </div>
                    </>
                  );
                })}
            </div>
            {value3}
          </div>
        </div>
        {/* Details */}
        <div
          style={{
            width: "100%",
          }}
        >
          <div className="Details">Trip Provide</div>
          <div className="availabilityDetils">
            {post.availability &&
              post.availability.map((item, index) => {
                return (
                  <>
                    <div className="HHH" key={index}>
                      <img
                        className="availabilityImage"
                        fetchpriority="low"
                        height="300"
                        width="300"
                        alt={item.value.name}
                        title={item.value.name}
                        src={
                          `http://localhost/admin/storage/uploads/` +
                          item.value.image.path
                        }
                      />
                      <p>{item.value.name}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default PackageSingle;
