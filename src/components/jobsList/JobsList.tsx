import React from "react";
import { jobsRu } from "../../data/jobsRu.ts";
import { jobsEn } from "../../data/jobsEn.ts";
import { useTranslation } from "react-i18next";

import "./JobsList.scss";

export default function JobsList() {
  const { i18n, t } = useTranslation();
  return (
    <div className="jobs-list section">
      <h2 className="section-name jobs-list__section-name">{t("jobs.name")}</h2>
      <div className="jobs-list__cards">
        {(i18n.language == "ru" ? jobsRu : jobsEn).map((job) => (
          <div key={job.name} className="jobs-list__card">
            <div className="jobs-list__header">
              <h3 className="jobs-list__name">{job.name}</h3>
              <a rel="link" href={job.link} className="jobs-list__link">
                {job.link}
              </a>
            </div>
            <p className="jobs-list__years">{job.years}</p>
            <p className="jobs-list__description">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
