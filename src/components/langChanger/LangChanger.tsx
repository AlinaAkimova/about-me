import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./LangChanger.scss";

export default function LangChanger() {
  const [localesListIsShow, setLocalesListIsShow] = useState(false);
  const { i18n } = useTranslation();
  const showList = () => setLocalesListIsShow(!localesListIsShow);
  const changeLanguage = async (lang: "en" | "ru") => {
    await i18n.changeLanguage(lang);
    setLocalesListIsShow(!localesListIsShow);
  };
  return (
    <div className="lang-changer">
      <button
        className="lang-changer__button lang-changer__button-main"
        onClick={() => showList()}
        style={
          localesListIsShow
            ? {
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderBottom: "0",
              }
            : {}
        }
      >
        {i18n.language}
      </button>
      {localesListIsShow && (
        <div className="lang-changer__list">
          <button
            className="lang-changer__button"
            onClick={() => changeLanguage("ru")}
          >
            ru
          </button>
          <button
            className="lang-changer__button"
            onClick={() => changeLanguage("en")}
          >
            en
          </button>
        </div>
      )}
    </div>
  );
}
