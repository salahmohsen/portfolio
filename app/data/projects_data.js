import { FaFigma, FaReact } from "react-icons/fa";
import { SiReactrouter, SiRedux, SiTailwindcss } from "react-icons/si";
import { TbApi, TbBrandNextjs } from "react-icons/tb";

const projects_data = [
  {
    id: "1",
    name: "Portfolio",
    createdAt: "Jan 2024",
    imagePATH: "/images/portfolio.svg",
    description: "My portfolio website.",
    technologies: [
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "Web APIs", icon: <TbApi /> },
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
      { name: "REST API", icon: <TbApi /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    projectLink: "https://slice.salahmohsen.com/",
  },
];

export default projects_data;
