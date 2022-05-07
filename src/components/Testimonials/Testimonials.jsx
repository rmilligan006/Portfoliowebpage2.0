import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tilly Jackson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores namminima maxime a, neque quo, ipsa dicta iure non reprehenderit",
  },
  {
    avatar: AVTR2,
    name: "Arthur Morgan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores namminima maxime a, neque quo, ipsa dicta iure non reprehenderit",
  },
  {
    avatar: AVTR3,
    name: "Lenny Summers",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores namminima maxime a, neque quo, ipsa dicta iure non reprehenderit",
  },
  {
    avatar: AVTR4,
    name: "Sadie Adler",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores namminima maxime a, neque quo, ipsa dicta iure non reprehenderit",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        spaceBetween={35}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
