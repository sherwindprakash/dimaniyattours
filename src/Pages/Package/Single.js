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
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  const [value3, setValue3] = useState(0);

  const handleChange3 = (e) => {
    setValue3(e.target.value);
  };

  //
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  // const checkList = ["10", "40", "60", "25"];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return Number(total) + Number(item);
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  //

  const names = ["James", "John", "Paul", "Ringo", "George"];

  let params = useParams();

  const [post, setPost] = React.useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost/dimaniyattours_api/admin/admin/api/collections/get/package?token=22f8709abba293936facc262597237&filter[title_slug]=" +
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
  }, [params.slug]);

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
            src={
              `http://localhost/dimaniyattours_api/admin/admin/storage/uploads/` +
              post.image.path
            }
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

          <div className="ExtraCalucul">
            <div className="GroupRadio">
              <h4>Type :</h4>
              <div className="Group">
                <input
                  type="radio"
                  id="Sharing"
                  name="type"
                  value="Sharing"
                  onChange={handleChange3}
                  //checked
                  required
                />
                <label htmlFor="no">Sharing</label>
              </div>
              <div className="Group">
                <input
                  type="radio"
                  id="Private"
                  name="type"
                  value="Private"
                  onChange={handleChange3}
                  required
                />
                <label htmlFor="Private">Private</label>
              </div>

              <small
                style={{
                  marginLeft: "5px",
                }}
              >
                (Travel add-ons)
              </small>
            </div>

            <div className="GroupRadio">
              <h4>Date :</h4>
              <input type="date" id="Sharing" name="type" required />
            </div>
          </div>
          {/*  */}

          {/* Totals */}
          <div className="TotalHolder">
            Total{" "}
            {value * post.price_adults +
              value2 * post.price_kids +
              Number(checkedItems)}{" "}
            OMR
          </div>
          {/* Travel add-ons and extras */}
          {value3 === "Private" ? (
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
                {post.additional.map((item, index) => (
                  <div key={index} className="GroupRadio Check">
                    <label
                      key={index + `_Radio`}
                      style={{
                        width: "100%",
                      }}
                    >
                      <input
                        value={item.value.price}
                        type="checkbox"
                        onChange={handleCheck}
                        className="CheckBox"
                      />
                      <img
                        className="travelImage"
                        fetchpriority="low"
                        height="300"
                        width="300"
                        alt={item.value.name}
                        title={item.value.name}
                        src={
                          `http://localhost/dimaniyattours_api/admin/admin/storage/uploads/` +
                          item.value.image.path
                        }
                      />
                    </label>

                    <span className={isChecked(item)}>{item.value.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
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
                          `http://localhost/dimaniyattours_api/admin/admin/storage/uploads/` +
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
        {/* Details */}
        <div
          style={{
            width: "100%",
          }}
        >
          <div className="Details">Menu - Breakfast</div>

          <div className="availabilityMenu">
            {post.menu_breakfast &&
              post.menu_breakfast.map((item, index) => {
                return (
                  <>
                    <div className="HoldMenu" key={index}>
                      <div className="LeftName">
                        <img
                          className="availabilityMenuImage"
                          fetchpriority="low"
                          height="300"
                          width="300"
                          alt={item.value.name}
                          title={item.value.name}
                          src={
                            `http://localhost/dimaniyattours_api/admin/admin/storage/uploads/` +
                            item.value.imageBreakfast.path
                          }
                        />
                      </div>

                      <div className="RightHolder">
                        <div>{item.value.nameBreakfast}</div>
                        <p>{item.value.detailsBreakfast}</p>
                      </div>
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
