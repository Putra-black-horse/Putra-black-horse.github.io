import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-network-chart"></i>
        <h3 className="about__title">Teamwork</h3>
        <span className="about__subtitle">Mampu bekerja secara efektif dalam tim dan berkolaborasi untuk mencapai hasil terbaik.</span>
      </div>

      <div className="about__box">
        <i class="bx bx-group"></i>
        <h3 className="about__title">Leadership</h3>
        <span className="about__subtitle">Berperan aktif dalam penyelesaian proyek hingga tahap akhir.</span>
      </div>

      <div className="about__box">
        <i class="bx bx-bulb"></i>
        <h3 className="about__title">Problem Solving</h3>
        <span className="about__subtitle">Saya mampu memikirkan sebuah solusi untuk masalah yang kompleks.</span>
      </div>
    </div>
  );
};

export default Info;
