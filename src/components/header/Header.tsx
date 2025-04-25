import React from "react";
import { useTranslation } from "react-i18next";
import LangChanger from "../langChanger/LangChanger.tsx";

import "./Header.scss";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="header">
      <LangChanger />
      <img
        className="header__photo"
        src="/me.webp"
        alt="me"
        width={500}
        height={700}
        loading="lazy"
      />
      <div className="header__info">
        <h1 className="header__name">
          {t("header.name")}
          <span className="header__gradient">{t("header.job")}</span>
        </h1>
        <div className="header__years">
          <h2 className="header__gradient">{t("header.counts.name")}</h2>
          <p>2,5 {t("header.counts.front-years")}</p>
          <p>{t("header.counts.it-years")}</p>
          <p>5 {t("header.counts.project")}</p>
          <p>23 {t("header.counts.me-years")}</p>
        </div>
      </div>
    </header>
  );
}
