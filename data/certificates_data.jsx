import { FaFreeCodeCamp, FaGoogle } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const certificates_data = [
  {
    id: 1,
    name: "Next.js 14 & React - The Complete Guide",
    issuingOrganization: "Udemy",
    organizationIcon: <SiUdemy />,
    certificateLink:
      "https://www.udemy.com/certificate/UC-e880c570-d2c7-42a8-ac09-41e7eb79cd9e/",
    issueDate: "May 2024",
    skills: [
      "Next.js",
      "App Router",
      "Server Actions",
      "Authentication ",
      "File upload",
    ],
  },
  {
    id: 2,
    name: "The UX Design Process: Empathize, Define, and Ideate",
    issuingOrganization: "Google",
    organizationIcon: <FaGoogle />,
    certificateLink:
      "https://coursera.org/share/e5cce9bb9de611ae4ec621d81e6128d2",
    issueDate: "Jan 2024",
    skills: [
      "User Experience (UX)",
      "Prototype",
      "Wireframe",
      "User Experience Design (UXD)",
      "UX Research",
    ],
  },
  {
    id: 3,
    name: "The Ultimate React Course: React, Redux & More",
    issuingOrganization: "Udemy",
    organizationIcon: <SiUdemy />,

    certificateLink:
      "https://www.udemy.com/certificate/UC-3af97ccb-793c-4fdf-b00c-277362a3de8d/",
    issueDate: "Nov 2023",
    skills: [
      "React",
      "contextAPI",
      "Redux",
      "CSS Modules",
      "styled-components",
      "React Router",
      "Tailwind",
      "React Query",
    ],
  },
  {
    id: 4,
    name: "Python Data Structures",
    issuingOrganization: "University of Michigan",
    organizationIcon: "/images/michigan.png",
    certificateLink:
      "https://coursera.org/share/77d433943bcbc3acab90b46c75f5e7d9",
    issueDate: "Apr 2023",
    skills: [
      "Python Syntax And Semantics",
      "Data Structure",
      "Tuple",
      "Python Programming",
    ],
  },
  {
    id: 5,
    name: "The Complete JavaScript Course: From Zero to Expert!",
    issuingOrganization: "Udemy",
    organizationIcon: <SiUdemy />,
    certificateLink:
      "https://www.udemy.com/certificate/UC-bed0ce2c-7516-430a-a893-40ca7b96a6d5/",
    issueDate: "Jan 2023",
    skills: [
      "JavaScript",
      "Object-Oriented Programming (OOP)",
      "Algorithms and Data Structures",
      "Parcel",
      "Babel.js",
    ],
  },
  {
    id: 6,
    name: "Responsive Web Design",
    issuingOrganization: "freeCodeCamp",
    organizationIcon: <FaFreeCodeCamp />,
    certificateLink:
      "https://freecodecamp.org/certification/salahmohsen/responsive-web-design",
    issueDate: "Aug 2021",
    skills: ["HTML", "CSS"],
  },
  {
    id: 7,
    name: "JavaScript Algorithms and Data Structures",
    issuingOrganization: "freeCodeCamp",
    organizationIcon: <FaFreeCodeCamp />,
    certificateLink:
      "https://www.freecodecamp.org/certification/salahmohsen/javascript-algorithms-and-data-structures",
    issueDate: "Sept 2020",
    skills: [
      "Javascript",
      "Algorithms and Data Structures",
      "Regular Expressions",
      "Functional Programming",
    ],
  },
];

export default certificates_data;
