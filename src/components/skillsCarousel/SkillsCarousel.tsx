import React from "react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "./SkillsCarousel.scss";

export default function SkillsCarousel() {
  const { t } = useTranslation();
  const params = {
    loop: true,
    simulateTouch: false,
    // allowTouchMove: false,
    autoplay: {
      delay: 1500,
    },
    modules: [Autoplay],
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      925: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
    },
  };

  const brands = ["js", "ts", "react", "vue", "nuxt", "pinia", "mobx", "git"];
  return (
    <div className="skills-carousel">
      <h2 className="skills-carousel__name section-name">{t("stack")}</h2>
      <Swiper {...params} className="skills-carousel__slider">
        {brands.map((item) => (
          <SwiperSlide className="skills-carousel__slide" key={item}>
            <img
              src={`./brands/${item}.png`}
              alt={item}
              className="skills-carousel__img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
