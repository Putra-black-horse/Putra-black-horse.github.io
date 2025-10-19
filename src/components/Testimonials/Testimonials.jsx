import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Certificate</h2>
      <span className="section__subtitle">Certificate Internship</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
       {Data.map(({ id, image }) => {
  return (
    <SwiperSlide className="testimonial__card" key={id}>
      <img src={image} alt="" className="testimonial__img full-image" />
    </SwiperSlide>
  );
})}
      </Swiper>
    </section>
  );
};

export default Testimonials;
