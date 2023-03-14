import "./Work.css";
import { Link } from "react-router-dom";

import background_ExperienceOmanDigital from "./assets/experience-oman.webp";

export default function Work() {
  return (
    <div className="filter">
      <input
        type="radio"
        id="tag-0"
        className="filter-tag"
        name="filter-radio"
        hidden
        defaultChecked
      />
      <input
        type="radio"
        id="tag-1"
        className="filter-tag"
        name="filter-radio"
        hidden
      />
      <input
        type="radio"
        id="tag-2"
        className="filter-tag"
        name="filter-radio"
        hidden
      />
      <input
        type="radio"
        id="tag-3"
        className="filter-tag"
        name="filter-radio"
        hidden
      />
      <input
        type="radio"
        id="tag-4"
        className="filter-tag"
        name="filter-radio"
        hidden
      />
      <input
        type="radio"
        id="tag-5"
        className="filter-tag"
        name="filter-radio"
        hidden
      />
      <input
        type="radio"
        id="tag-6"
        className="filter-tag"
        name="filter-radio"
        hidden
      />
      <input
        type="radio"
        id="tag-7"
        className="filter-tag"
        name="filter-radio"
        hidden
      />

      <div className="filter-nav">
        <label className="chip" htmlFor="tag-0">
          FILTER WORK
        </label>
        <label className="chip" htmlFor="tag-1">
          INTEGRATED
        </label>
        <label className="chip" htmlFor="tag-2">
          DIGITAL
        </label>
        <label className="chip" htmlFor="tag-3">
          BRANDING
        </label>
        <label className="chip" htmlFor="tag-4">
          ADVERTISING
        </label>
        <label className="chip" htmlFor="tag-5">
          PR
        </label>
        <label className="chip" htmlFor="tag-6">
          EVENTS
        </label>
      </div>

      <div className="filter-body">
        {/*  */}
        <div className="filter-item card" data-tag="tag-1">
          <Link
            className="LinkClass"
            to="/en/our-work/integrated/experience-oman"
          >
            <div
              style={{
                backgroundImage: `url(${background_ExperienceOmanDigital})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "350px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <div className="Hold-work">
                Experience Oman
                <div
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    textTransform: "uppercase",
                    paddingLeft: "5px",
                  }}
                >
                  Digital
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/*  */}

        {/* 
        <div className="filter-item card" data-tag="tag-2">
          <div className="Hold-work">DIGITAL</div>
        </div>
        <div className="filter-item card" data-tag="tag-3">
          <div className="Hold-work">BRANDING</div>
        </div>
        <div className="filter-item card" data-tag="tag-4">
          <div className="Hold-work">ADVERTISING</div>
        </div>
        <div className="filter-item card" data-tag="tag-5">
          <div className="Hold-work">PR</div>
        </div>
        <div className="filter-item card" data-tag="tag-6">
          <div className="Hold-work">EVENTS</div>
        </div> */}
      </div>
    </div>
  );
}
