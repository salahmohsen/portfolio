import ExternalLink from "../components/common/externalLink";
import { FaFigma, FaFreeCodeCamp, FaGoogle, FaReact } from "react-icons/fa";
import { SiReactrouter, SiRedux, SiTailwindcss, SiUdemy } from "react-icons/si";
import { TbApi, TbBrandNextjs } from "react-icons/tb";

export const profileName = "Salah Mohsen";
export const profileTitle = "Designer & Developer";
export const profileDescription =
  "I build pixel-perfect, accessible products for the web and beyond.";

export const Data_Sections = [
  "about",
  "certificates",
  "projects",
  "previous experience",
  ["Full Résumé", "/resume.pdf"],
];

export const Data_About = () => {
  return (
    <>
      <p className="mb-5 text-pretty">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an{" "}
        {<ExternalLink url="#">advertising agency</ExternalLink>}, a{" "}
        {<ExternalLink url="#">start-up</ExternalLink>}, a{" "}
        {<ExternalLink url="#">student-led design studio</ExternalLink>}, and a{" "}
        {<ExternalLink url="#">huge corporation.</ExternalLink>}
      </p>
      <p className="mb-5 text-pretty">
        My main focus these days is building products and leading projects for
        our clients at {<ExternalLink url="#">Upstatement</ExternalLink>}. In my
        free time I’ve also released an{" "}
        {<ExternalLink url="#">online video course</ExternalLink>} that covers
        everything you need to know to build a web app with the Spotify API.
      </p>
      <p className="mb-5 text-pretty">
        When I’m not at the computer, I’m usually rock climbing, hanging out
        with my wife and two cats, or running around Hyrule searching for{" "}
        {<ExternalLink url="#">Korok seeds</ExternalLink>}
      </p>
    </>
  );
};

export const Data_certificates = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Responsive Web Design",
    issuingOrganization: "freeCodeCamp",
    organizationIcon: <FaFreeCodeCamp />,
    certificateLink:
      "https://freecodecamp.org/certification/salahmohsen/responsive-web-design",
    issueDate: "Aug 2021",
    skills: ["HTML", "CSS"],
  },
  {
    id: 6,
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

export const Data_experience = [
  {
    id: "1",
    company: "TFK",
    title: "Phtoto Editor",
    duration: "2020 -> 2023",
    description:
      "I'm responsible for applying TFK guidelines that vary across content types in order to preserve consistency and a visually appealing experience on the website, I.e. standardize background color, Enhance features and figure, remove wrinkles, retouch skin, correct colors, etc... in addition to accelerating the workflow with automation features in photoshop and easing, organizing it with Trello.",
    skills: "",
    link: "https://tfk.me/",
  },
  {
    id: "2",
    company: "Meyle+Müller",
    title: "Photo Editor",
    duration: "2019 -> 2020",
    description:
      "I was responsible to retouch, and color-correct product images for many brands like BOSS, BOSCH, Detlev Louis, etc... and facilitating communication between the Bulgaria office and Cairo office in addition to providing supervision and guidance to my team and achieving over 300% increase in our production per day.",
    skills: "",
    link: "https://www.meyle-mueller.de/",
  },
  {
    id: "3",
    company: "Freelance",
    title: "Photographer & Retoucher",
    duration: "2014 -> 2019",
    description: `In the past few years, I shot more than 150 events mainly weddings and pre-wedding photo sessions. The challenges I've faced during this experience sharpened my photography skills and accumulated a deep understanding of the medium; my eyes became a more detail-oriented and efficient producer of excellent compositions, I've acquired professional skills dealing with a variety of lighting conditions and sophisticated skills in post-processing field, in addition to solid soft skills that helped me directing my photography and get through a lot of stressful situations. 

      I've also published a story titled "Me and the Moulid or a self-portrait through others" on MadaMasr in 2019 and participated in the Shawkan photography and reached the shortlist of competition in the photojournalism category in 2016 with a photo titled "The land protests".`,
    skills: "",
    link: "https://www.behance.net/gallery/77775569/El-Moulid-A-Self-Portrait-Through-Others",
  },
];

export const Data_Projects = [
  {
    id: "1",
    name: "Portfolio",
    createdAt: "Jan 2024",
    imagePATH: "/images/loremepsom.png",
    description:
      "Aute quis qui sunt eiusmod aliquip culpa dolor velit voluptate ad officia reprehenderit anim.",
    technologies: [
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "Intersection Observer API", icon: <TbApi /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    projectLink: "salahmohsen.com",
  },
  {
    id: "2",
    name: "Couply",
    createdAt: "Jan 2024",
    imagePATH: "/images/loremepsom.png",
    description:
      "Ea adipisicing sint ex nulla exercitation incididunt deserunt ea dolore cillum non esse irure dolor.",
    technologies: [
      { name: "figma", icon: <FaFigma /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    projectLink: "https://couply.salahmohsen.com/",
  },
  {
    id: "3",
    name: "Slice",
    createdAt: "Sep 2023",
    imagePATH: "/images/loremepsom.png",
    description:
      "Anim esse pariatur ea proident. Ea adipisicing sint ex nulla exercitation incididunt deserunt ea dolore cillum non esse irure dolor.",
    technologies: [
      { name: "figma", icon: <FaFigma /> },
      { name: "react", icon: <FaReact /> },
      { name: "react router", icon: <SiReactrouter /> },
      { name: "redux", icon: <SiRedux /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    projectLink: "https://slice.salahmohsen.com/",
  },
];
