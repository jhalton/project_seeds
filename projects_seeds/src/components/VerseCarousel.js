import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import VerseCard from "./VerseCard";

function VerseCarousel({ verses }) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={true}
      navigation
      effect="slide"
      speed={300}
      allowTouchMove={true}
      className="swiper-container"
    >
      {verses.map((verse, index) => (
        <SwiperSlide key={index}>
          <VerseCard text={verse.text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default VerseCarousel;
