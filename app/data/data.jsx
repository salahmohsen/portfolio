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
  "projects",
  "certificates",
  "previous experience",
  ["Full Résumé", "/resume.pdf"],
];

export const Data_About = () => {
  return (
    <>
      <p className="mb-5 text-pretty">
        Back in 2013, I started a career in photography, documenting hundreds of{" "}
        {
          <ExternalLink url="https://www.behance.net/gallery/69658683/2018s-Featured-wedding-photos">
            events
          </ExternalLink>
        }
        , publishing a{" "}
        {
          <ExternalLink url="https://www.madamasr.com/en/2019/03/21/panorama/u/me-and-the-moulid/">
            story in madamasr
          </ExternalLink>
        }
        , and getting shortlisted at a prestigious{" "}
        {
          <ExternalLink url="https://www.madamasr.com/en/2016/12/31/panorama/u/mada-publishes-the-shortlist-of-the-shawkan-photography-competition/">
            photography contest
          </ExternalLink>
        }
        . I worked for a major{" "}
        {
          <ExternalLink url="https://www.meyle-mueller.de/">
            media company
          </ExternalLink>
        }{" "}
        in Germany and a pioneering fashion{" "}
        {
          <ExternalLink url="https://tfk.me/">
            {" "}
            e-commerce platform
          </ExternalLink>
        }{" "}
        based in Egypt.
      </p>
      <p className="mb-5 text-pretty">
        But the desire to weave magic with pixels, not just light, combined with
        the itch to code couldn’t be ignored. So, in 2023, I began my journey in
        web development, trading shutter clicks for keyboard clacks. Now, I pour
        my artistic soul into crafting pixel-perfect, accessible products for
        the web and beyond.
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
      "I was responsible for applying TFK guidelines that vary across content types in order to preserve consistency and a visually appealing experience on the website, I.e. standardize background color, Enhance features and figure, remove wrinkles, retouch skin, correct colors, etc... in addition to accelerating the workflow with automation features in photoshop and easing, organizing it with Trello.",
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
    description: `I shot more than 150 events mainly weddings and pre-wedding photo sessions. The challenges I've faced during this experience sharpened my photography skills and accumulated a deep understanding of the medium; my eyes became a more detail-oriented and efficient producer of excellent compositions, I've acquired professional skills dealing with a variety of lighting conditions and sophisticated skills in post-processing field, in addition to solid soft skills that helped me directing my photography and get through a lot of stressful situations. 
    In 2016 i participated in Shawkan photography contest and reached the shortlist of competition in the photojournalism category with a photo titled "The land protests". I've also published a story titled "Me and the Moulid or a self-portrait through others" on MadaMasr in 2019.
    `,
    skills: "",
    link: "https://www.behance.net/gallery/77775569/El-Moulid-A-Self-Portrait-Through-Others",
  },
];

export const Data_Projects = [
  {
    id: "1",
    name: "Portfolio",
    createdAt: "Jan 2024",
    imagePATH: "/images/portfolio.svg",
    description: "My portfolio website.",
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
    imagePATH: "/images/couply.svg",
    description:
      "Couply is a landing page for an browser extension that automatically find coupon codes at online retailers.",
    technologies: [
      { name: "figma", icon: <FaFigma /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    projectLink: "https://couply.salahmohsen.com/",
  },
  {
    id: "3",
    name: "SLICE",
    createdAt: "Sep 2023",
    imagePATH: "/images/slice.svg",
    description:
      "SLICE is a web application for a pizza restaurant that allows customers to order pizza online and track the progress of their orders.",
    technologies: [
      { name: "figma", icon: <FaFigma /> },
      { name: "react", icon: <FaReact /> },
      { name: "react router", icon: <SiReactrouter /> },
      { name: "redux", icon: <SiRedux /> },
      { name: "Reverse Geocoding to City API", icon: <TbApi /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    projectLink: "https://slice.salahmohsen.com/",
  },
];
