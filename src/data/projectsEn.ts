import { Project } from "../types/project";

export const projectsEn: Project[] = [
  {
    img: "/projects/vibox.webp",
    name: "Vibox",
    info: "Web application for building and purchasing your computer",
    link: "https://vibox.co.uk/",
    technologies: "Vue3 / Nuxt3 / Typescript / Pinia",
    description:
      "- integration of Google Maps API for filling in delivery addresses;\n- development of a component library for creating universal pages. Components can be added in any order via the CMS;\n- localization in 5 languages;\n- implementation of shopping cart logic",
    team: "2 frontend developers, a backend developer, a QA tester, a project manager;\na designer on the client's side",
  },
  {
    img: "/projects/quiz.webp",
    name: "QuizWhiz",
    info: "Telegram application for quiz games",
    link: "https://t.me/notQuizWhizBot/QuizWhiz",
    technologies: "Vue3 / Nuxt3 / Typescript / Pinia",
    description:
      "- real-time application interaction using WebSocket;\n- connecting/disconnecting TON wallet, withdrawing funds;\n- synchronization of client and server time",
    team: "a frontend developer, a project manager;\na designer and backend developers on the client's side",
  },
  {
    img: "/projects/fruktorum.webp",
    name: "Fruktorum",
    info: "Work on updating the company's website",
    link: "https://fruktorum.com/ru",
    technologies: "Vue3 / Nuxt3 / Typescript / Pinia",
    description:
      "- SEO configuration;\n- working with legacy code;\n- layout of components based on the new design, including responsiveness, creation of new blocks, and modifying client-side logic accordingly.",
    team: "2–3 frontend developers, depending on availability, a project manager",
  },
  {
    img: "/projects/chess.webp",
    name: "Chess Generation",
    info: "Web application for the sale of chess courses",
    link: "https://generationchess.ru/",
    technologies: "Vue3 / Quasar / Apollo / GraphQL / TypeScript",
    description:
      "- user registration/login with SMS verification integration;\n- development of the teacher's page, with two versions: edit and view;\n- role-based access control support;\n- dark/light theme toggle;\n- responsive and semantic layout",
    team: "the project was developed outside the company by a team of developers (with a rotating lineup)",
  },
  {
    img: "/projects/olga.webp",
    name: "Olga finance",
    info: "Web application for planning working hours and calculating company finances",
    technologies: "React / TypeScript / MobX / Axios / MUI",
    description:
      "- worked with the chart.js library;\n- Developed tables displaying lists of company projects, modal windows for adding and editing entities in the system, and charts with the company's financial reports",
    team: "3 frontend developers, a project manager, a backend developer, and a designer",
    addition:
      "the application is accessible only via an invitation link for company employees",
  },
];
