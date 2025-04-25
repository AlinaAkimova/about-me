import React from "react";
import { factsRu } from "../../data/factsRu.ts";
import { factsEn } from "../../data/factsEn.ts";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

import "./AboutMe.scss";

export default function AboutMe() {
  const { i18n, t } = useTranslation();
  return (
    <div className="section">
      <h2 className="section-name about-me__name">{t("about.name")}</h2>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
          thresholdDelta: 50,
          forceToAxis: true,
        }}
        touchStartPreventDefault={true}
        touchReleaseOnEdges={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="about-me__swiper"
      >
        {(i18n.language === "ru" ? factsRu : factsEn).map((fact) => (
          <SwiperSlide key={fact.name} className="about-me__card">
            <img src={fact.img} alt={fact.name} className="about-me__img" />
            <div className="about-me__info">
              <h3 className="about-me__card-name">{fact.name}</h3>
              <p className="about-me__description">{fact.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
