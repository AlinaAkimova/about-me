import React from "react";
import { useTranslation } from "react-i18next";

import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <h2 className="footer__name">{t("footer.contact")}</h2>
      <span>
        <span>Email: </span>
        <a href="mailto:linakim107@gmail.com" className="footer__email">
          linakim107@gmail.com
        </a>
      </span>

      <span className="footer__links">
        <a href="https://t.me/akimova_alinaaa">
          <img src="./icons/tg.svg" alt="tg icon" />
        </a>
        <a href="https://www.linkedin.com/in/alina-akimova-b1b778280/">
          <img src="./icons/linkedin.svg" alt="linkedin icon" />
        </a>
        <a href="https://github.com/AlinaAkimova">
          <img src="./icons/github.svg" alt="github icon" />
        </a>
      </span>
    </footer>
  );
}
