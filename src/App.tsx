import React, { useState } from "react";

import Header from "./components/header/Header.tsx";
import Projects from "./components/projects/Projects.tsx";
import SkillsCarousel from "./components/skillsCarousel/SkillsCarousel.tsx";
import AboutMe from "./components/aboutMe/AboutMe.tsx";
import Footer from "./components/footer/Footer.tsx";
import JobsList from "./components/jobsList/JobsList.tsx";

import "./App.scss";

export default function App() {
  const [scrollValueBlue, setScrollValueBlue] = useState(3900);
  const [scrollValueBeige, setScrollValueBeige] = useState(5200);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleScroll = (event) => {
    if (window.screen.height < 900) {
      setScrollValueBlue(3150);
      setScrollValueBeige(4480);
    }
    if (window.screen.height > 1100) {
      setScrollValueBlue(4100);
      setScrollValueBeige(5400);
    }

    if (event.currentTarget.scrollTop > 500) {
      setBackgroundColor("#f3f4f4");
    }
    if (event.currentTarget.scrollTop > scrollValueBlue) {
      setBackgroundColor("#8eb9ff");
    }
    if (event.currentTarget.scrollTop > scrollValueBeige) {
      setBackgroundColor("#f3f4f4");
    }

    let windowHeight = event.currentTarget.clientHeight;
    document
      .querySelectorAll(
        ".projects__project-card, .section-name, .skills-carousel__slider, .jobs-list__card, .about-me__swiper"
      )
      .forEach((block) => {
        let blockPosition = block.getBoundingClientRect().top;

        if (blockPosition < windowHeight - 100) {
          (block as HTMLElement).style.opacity = "1";
          (block as HTMLElement).style.transform = "translateY(0)";
        }
      });
  };

  return (
    <div
      className="app"
      onScroll={handleScroll}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Header />
      <Projects />
      <SkillsCarousel />
      <JobsList />
      <div className="app__about-section">
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}
