import img1 from "./assets/projects/addre.png";
import img2 from "./assets/projects/pp.png";
import img3 from "./assets/projects/techpye.jpg";
import img4 from "./assets/projects/oko.png";

const ProjectList = [
  {
    id: 1,
    image:
      "https://play-lh.googleusercontent.com/h9EjcgKPcBWNS1H46tuxsOFbQVyrlZxrpRIAXOZi1dqlykVCcq0TOun7gJ_a_QpZzwZy2Nc94_mPHWCdk_nEOoE=w240-h480-rw",
    name: "Air Force Alumni App",
    des: "A social app for NAF Alumni to connect and share memories, events, and achievements and donate back to support the school.",
    stack: " React Native, Expo, Firebase, EAS",
    link: {
      live: "",
      code: "",
    },
    type: "APP",
    appLink: {
      android: "https://play.google.com/store/apps/details?id=com.CHSG.AFSS",
      ios: "https://apps.apple.com/ng/app/afss-kaduna-alumni/id6753322024",
    },
  },
  {
    id: 2,
    image: "https://sayemtransportlogistics.com/assets/img/favicon.png",
    name: "Sayem Route App",
    des: "A Ride hailing app for fast and efficient transportation across the world importing and exporting goods and products with instant payment gateway",
    stack: " React Native, Expo, Firebase, EAS, Payaza",
    link: {
      live: "",
      code: "",
    },
    type: "APP",
    appLink: {
      android: "",
      ios: "",
    },
  },
  {
    id: 3,
    image: "https://admin.afcskdalumni.com/logo.svg",
    name: "AFSS Kaduna alumni Admin dashboard",
    des: "An Admin dashboard for managing the flow of data and interactions for the AFSS Kaduna Alumni app",
    stack: " React, Tanstack Query, Tailbits UI",
    link: {
      live: "https://admin.afcskdalumni.com",
      code: "",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
  },
  {
    id: 4,
    image: img3,
    name: "Techpye",
    des: "An Advanced LMS for online courses like Software development, Data analysis",
    stack: " React, Express, PosgreSQL, S3",
    link: {
      live: "https://techpye.com",
      code: "https://github.com/chsgi/techpye",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
  },
  {
    id: 5,
    image: img4,
    name: "Tributetookorafor",
    des: "A tribute website for accepting condolences and acknowledging tributes.",
    stack: " React (SQL Express Node)",
    link: {
      live: "https://tributetookorafor.com/",
      code: "https://github.com/CHSGI/Tributetookorafor",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
  },
  {
    id: 6,
    image: img2,
    name: "Project Pulse",
    des: "A Repository Store for uploading, downloading, and storing of Final Year thesis for students.",
    stack: "MongoDB,   Express,   React,   Node",
    link: {
      live: "https://projectpulse.pages.dev/",
      code: "https://github.com/AOTRA68/projectPulse",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
  },
  {
    id: 7,
    image: img1,
    name: "Addre",
    des: "An RFID Management system for adding, tracking and managing attendance, and student details.",
    stack: " MongoDB,   Express,   React,   Node",
    link: {
      live: "https://addre.pages.dev/",
      code: "https://github.com/Ksohlo/Addre",
    },
    type: "WEB",
    appLink: {
      android: "",
      ios: "",
    },
  },
];

const TechList = [
  {
    id: 1,
    name: "Git (Version Control)",
    ico: "bx bxl-git",
    des: "Experience with Git and Github.",
  },
  // {
  //   id: 2,
  //   name: "Javascript",
  //   ico: "bx bxl-javascript",
  //   des: "Experience with Javascript ES5, ES6 and ES7+.",
  // },
  {
    id: 3,
    name: "Typescipt",
    ico: "bx bxl-typescript",
    des: "Experience with Typesciptfor type safe queries and scalable codes",
  },
  {
    id: 4,
    name: "Saas",
    ico: "bx bxl-sass",
    des: "Experience with Sass css a preprocessor css library",
  },
  {
    id: 5,
    name: "Tailwind",
    ico: "bx bxl-tailwind-css",
    des: "Experience with tailwind for responsive design.",
  },
  {
    id: 6,
    name: "React JS",
    ico: "bx bxl-react",
    des: "Experience with React.JS and React components and states.",
  },
  {
    id: 7,
    name: "React Native (expo)",
    ico: "bx bxl-react",
    des: "Experience with React Native and expo cli for cross platform native mobile developement.",
  },
  {
    id: 8,
    name: "Zustand",
    ico: "zustand",
    des: `Experience with Zustand for state management.`,
  },
  {
    id: 9,
    name: "Next JS",
    ico: "next",
    des: `Experience with Next Js for Fullstack developement and server side rendering...`,
  },
  {
    id: 10,
    name: "Express JS",
    ico: "bx bx-server",
    des: `Experience with Express JS for server side app development.`,
  },
  {
    id: 11,
    name: "MongoDB",
    ico: "bx bxl-mongodb",
    des: `Experience with mongoDB for non relational Database management.`,
  },
  {
    id: 12,
    name: "SQL DB",
    ico: "SiPostgresql",
    des: `Experience with sql based database like Postgresql, mysql...`,
  },
  {
    id: 13,
    name: "React Query",
    ico: "query",
    des: `Experience with React query now Tanstack query for querying apis & caching data.`,
  },
  {
    id: 14,
    name: "AWS",
    ico: "bx bxl-aws",
    des: `Experience with AWS s3 bucket, E-beanstalk etc.`,
  },
];

const Journeys = [
  {
    id: 1,
    date: "September 2021",
    des: "Started my Journey in the Tech space",
  },
  {
    id: 2,
    date: "May 2023",
    des: "Received my Certification in Responsive Web design from freeCodeCamp",
  },
  {
    id: 3,
    date: "May 2023 - June 2024",
    des: "I have been improving and collaborating with projects Online ",
  },
  {
    id: 4,
    date: "July 2024",
    des: "Began Internship as a developer with CHSG Tech USA.",
  },
  {
    id: 5,
    date: "October 2024",
    des: "Became Team lead and Mobile developer with LOEM Health Insurance.",
  },
];

export { ProjectList, TechList, Journeys };
