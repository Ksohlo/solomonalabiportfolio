import img1 from "./assets/projects/addre.png"
import img2 from "./assets/projects/pp.png"
import img3 from "./assets/projects/furnish.png"
import img4 from "./assets/projects/oko.png"

const ProjectList =[
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
        name: "Furnish It",
        des: "A Furniture website for showcasing High class furnitures and office equipments.",
        stack: " React",
        link: {
            live: "",
            code: "https://github.com/Ksohlo/Furnish-It"
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
]


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
        des: "Experience with Sass css."
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
        name: "Redux",
        ico: "bx bxl-redux",
        des: `Experience with Redux for state management.`
    },
    {
        id: 7,
        name: "Node JS",
        ico: "bx bxl-nodejs",
        des: `Experience with Node Technology.`
    },
    {
        id: 8,
        name: "Express JS",
        ico: "bx bx-server",
        des: `Experience with Express JS for server side app development.`
    },
    {
        id: 9,
        name: "MongoDB",
        ico: "bx bxl-mongodb",
        des: `Experience with MongoDB for non relational Database management.`
    },
    
];

const Journeys = [
    {
        id: 1,
        date: "September 2022",
        des: "Started my Journey into the Tech space"
    },
    {
        id: 2,
        date: "May 2023",
        des: "Received my Certification in Responsive Web design"
    },
    {
        id: 3,
        date: "May 2023 - June 2024",
        des: "I have ben practicing and improving myself"
    },
    {
        id: 4,
        date: "July 2024 - till date",
        des: "Began Intership as a developer with CHSG Tech USA."
    }
];
export { ProjectList, TechList, Journeys };