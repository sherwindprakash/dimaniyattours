import React, { useEffect, useState } from "react";
import "./Comments.css";
import Form from "../Form/From";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

export default function Comments() {
  const [Info, setInfo] = useState();

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(
      "http://localhost/admin/api/collections/get/comments?token=22f8709abba293936facc262597237&filter[published]=true"
    )
      .then((response) => response.json())
      .then((data) => setInfo(data.entries));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <>
      <div className="Comments">
        <h1
          style={{
            marginTop: "80px",
          }}
        >
          Let's hear from the people
          <a
            style={{
              display: "inline",
              fontSize: "16px",
              marginLeft: "20px",
            }}
            title="Give Your comment"
            href="#comments"
          >
            Give your comment
          </a>
        </h1>

        {Info ? (
          <div className="CommentsMaster">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {Info &&
                Info.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div className="commentHolder" key={index}>
                          <h4>{item.FullName}</h4>
                          <div>{item.Excerpt}</div>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
            </Swiper>
          </div>
        ) : (
          <div></div>
        )}
        {/* POP */}
        <div className="modal" id="comments">
          <a className="modal-overlay" href="#close" aria-label="Close"></a>
          <div className="modal-container" role="document">
            <div className="modal-header">
              <a
                className="btn btn-clear float-right"
                href="#close"
                aria-label="Close"
              ></a>
              <div className="modal-title">Give your comment</div>
            </div>
            <div className="modal-body">
              <div className="content">
                <Form post="Give your comment" name={"comments"} />
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
    </>
  );
}
