import img1 from "./assets/projects/addre.png";
import img2 from "./assets/projects/pp.png";
import img3 from "./assets/projects/techpye.jpg";
import img4 from "./assets/projects/oko.png";

const ProjectList = [
    {
        id: 1,
        image: img1,
        name: "Addre",
        des: "An RFID Management system for adding, tracking and managing attendance, and student details.",
        stack: " MongoDB,   Express,   React,   Node",
        link: {
            live: "https://addre.pages.dev/",
            code: "https://github.com/Ksohlo/Addre"
        } 
    },
    {
        id: 2,
        image: img2,
        name: "Project Pulse",
        des: "A Repository Store for uploading, downloading, and storing of Final Year thesis for students.",
        stack: "MongoDB,   Express,   React,   Node",
        link: {
            live: "https://projectpulse.pages.dev/",
            code: "https://github.com/AOTRA68/projectPulse"
        } 
    },
    {
        id: 3,
        image: img3,
        name: "Techpye",
        des: "An Advanced LMS for online courses like Software development, Data analysis",
        stack: " React, Express, PosgreSQL, S3",
        link: {
            live: "https://techpye.com",
            code: "https://github.com/chsgi/techpye"
        } 
    },
    {
        id: 4,
        image: img4,
        name: "Tributetookorafor",
        des: "A tribute website for accepting condolences and acknowledging tributes.",
        stack: " React (SQL Express Node)",
        link: {
            live: "https://tributetookorafor.com/",
            code: "https://github.com/CHSGI/Tributetookorafor"
        } 
    },
];


const TechList =[
    {
        id: 1,
        name: "Git (Version Control)",
        ico: "bx bxl-git",
        des: "Experience with Git and Github."
    },
    {
        id: 2,
        name: "Javascript",
        ico: "bx bxl-javascript",
        des: "Experience with Javascript ES5, ES6 and ES7+."
    },
    {
        id: 3,
        name: "Saas",
        ico: "bx bxl-sass",
        des: "Experience with Sass css a preprocessor css library"
    },
    {
        id: 4,
        name: "Tailwind",
        ico: "bx bxl-tailwind-css",
        des: "Experience with tailwind for responsive design."
    },
    {
        id: 5,
        name: "React JS",
        ico: "bx bxl-react",
        des: "Experience with React.JS and React components and states."
    },
    {
        id: 6,
        name: "React Native",
        ico: "bx bxl-react",
        des: "Experience with React Native for cross platform mobile developement."
    },
    {
        id: 7,
        name: "Zustand",
        ico: "zustand",
        des: `Experience with Zustand for state management.`
    },
    {
        id: 8,
        name: "Next JS",
        ico: "next",
        des: `Experience with Next Js for Fullstack developement and server side rendering...`
    },
    {
        id: 9,
        name: "Express JS",
        ico: "bx bx-server",
        des: `Experience with Express JS for server side app development.`
    },
    {
        id: 10,
        name: "MongoDB",
        ico: "bx bxl-mongodb",
        des: `Experience with mongoDB for non relational Database management.`
    },
    {
        id: 11,
        name: "SQL DB",
        ico: "SiPostgresql",
        des: `Experience with sql based database like Postgresql, mysql...`
    },
    {
        id: 12,
        name: "React Query",
        ico: "query",
        des: `Experience with React query now Tanstack query for querying apis & caching data.`
    },
    
];

const Journeys = [
    {
        id: 1,
        date: "September 2022",
        des: "Started my Journey in the Tech space"
    },
    {
        id: 2,
        date: "May 2023",
        des: "Received my Certification in Responsive Web design from freeCodeCamp"
    },
    {
        id: 3,
        date: "May 2023 - June 2024",
        des: "I have been improving and collaborating with projects Online "
    },
    {
        id: 4,
        date: "July 2024",
        des: "Began Internship as a developer with CHSG Tech USA."
    },
    {
        id: 5,
        date: "January 2025",
        des: "Began Team lead and Mobile developer with LOEM Health Insurance."
    }
];

export { ProjectList, TechList, Journeys };