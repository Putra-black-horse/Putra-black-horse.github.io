import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Journey</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${activeTab === 1 ? "qualification__active" : ""}`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={`qualification__button button--flex ${activeTab === 2 ? "qualification__active" : ""}`}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          {/* Education */}
          <div className={`qualification__content ${activeTab === 1 ? "qualification__content-active" : ""}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SDN Gebang</h3>
                <span className="qualification__subtitle">Indonesia - Surakarta</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2014 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">SMPN 7 Surakarta</h3>
                <span className="qualification__subtitle">Indonesia - Surakarta</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SMKN6 Surakarta</h3>
                <span className="qualification__subtitle">Indonesia - Surakarta</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className={`qualification__content ${activeTab === 2 ? "qualification__content-active" : ""}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">AJAKONLINE.COM</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2024 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI/UX Designer</h3>
                <span className="qualification__subtitle">PT Phicos Group</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                   2025
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
