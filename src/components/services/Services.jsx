import React, { use } from "react";
import "./services.css";
import { useState } from "react";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Knowledge</h2>
      <span className="section__subtitle">What I Learn</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-monitor services__icon"></i>
            <h3 className="services__title">
              Pemrograman  <br />Web
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Selengkapnya
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Pemrograman Web</h3>

              <p className="services__modal-description">Di SMK, saya mempelajari pengembangan web menggunakan HTML, CSS, dan JavaScript.
Saya terbiasa mendesain antarmuka dengan Figma dan mengembangkan aplikasi menggunakan React dan Laravel.
Saya juga berpengalaman dalam pengujian serta debugging aplikasi.</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Membangun website statis dan dinamis menggunakan HTML, CSS, dan JavaScript.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Menggunakan framework seperti React untuk front-end.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Membuat sistem login dan database dengan PHP/MySQL.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Mengembangkan tampilan yang responsif untuk semua perangkat.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-play services__icon"></i>
            <h3 className="services__title">Pemrograman  <br />Game</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"} >
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Pemrograman Game<br/></h3>
              <p className="services__modal-description">Di SMK, saya mempelajari dasar-dasar pemrograman game menggunakan Unity dan bahasa C++.
Saya terbiasa membuat gameplay sederhana, mengatur logika game, dan mendesain antarmuka pengguna.
Saya juga memahami proses testing dan debugging untuk memastikan game berjalan sesuai fungsinya.</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Membuat game 2D sederhana menggunakan game engine.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Mengembangkan mekanik permainan dan level desain.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Mengembangkan UI/UX yang interaktif dalam game.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Mengatur logika permainan dan kontrol karakter.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Mengintegrasikan suara dan efek visual ke dalam game.</p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">enguji performa dan gameplay di berbagai perangkat.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-mobile-android-alt services__icon"></i>
            <h3 className="services__title">Pemrograman  <br /> Mobile</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Pemrograman Mobile</h3>

              <p className="services__modal-description">
                Selama 3 tahun di SMK jurusan Rekayasa Perangkat Lunak, saya fokus mempelajari pemrograman mobile. Saya belajar membuat aplikasi Android dan mendesain antarmuka pengguna. Pengembangan dilakukan menggunakan Android Studio
                untuk menguji dan memperbaiki aplikasi.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Membuat aplikasi Android berbasis Java/Kotlin.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Membuat aplikasi Android berbasis Java/Kotlin.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Menghubungkan aplikasi ke database menggunakan API.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Mengelola penyimpanan data lokal dan notifikasi.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Menguji aplikasi langsung di perangkat atau emulator.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
