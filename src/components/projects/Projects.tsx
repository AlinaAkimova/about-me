import React, { useState } from "react";
import { projectsRu } from "../../data/projectsRu.ts";
import { projectsEn } from "../../data/projectsEn.ts";
import { useTranslation } from "react-i18next";

import "./Projects.scss";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const setCardIndex = (index: number) => {
    if (hoveredCardIndex === index) {
      setHoveredCardIndex(null);
    } else {
      setHoveredCardIndex(index);
    }
  };

  return (
    <div className="projects section">
      <h2 className="section-name">{t("projects.name")}</h2>
      {(i18n.language === "ru" ? projectsRu : projectsEn).map(
        (project, index) => (
          <div
            key={project.name}
            className="projects__project-card"
            onClick={() => setCardIndex(index)}
          >
            <div
              className={`projects__outer ${
                hoveredCardIndex === index && "projects__outer-hovered"
              }`}
            >
              <div className="projects__img-wrapper">
                <img
                  className="projects__img"
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                />
              </div>
              <h3 className="projects__card-name">{project.name}</h3>
              <p className="projects__info">{project.info}</p>
              <img
                src="./icons/hand.svg"
                alt="hand icon"
                className="projects__hand-icon"
              />
            </div>

            <div
              className={`projects__inner ${
                hoveredCardIndex === index && "projects__inner-hovered"
              }`}
            >
              <h3 className="projects__card-name">{project.name}</h3>
              <span className="projects__section-title">
                {t("projects.stack")}
              </span>
              <p className="projects__description">{project.technologies}</p>
              <span className="projects__section-title">
                {t("projects.tasks")}
              </span>
              <p className="projects__description">{project.description}</p>
              <span className="projects__section-title">
                {t("projects.team")}
              </span>
              <p className="projects__description">{project.team}</p>
              {project.addition && (
                <p className="projects__description">{project.addition}</p>
              )}
              {project.link && (
                <a
                  rel="noreferrer"
                  href={project.link}
                  target="_blank"
                  className="projects__link"
                >
                  <img src="./icons/arrow.svg" alt="arrow icon" />
                </a>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
