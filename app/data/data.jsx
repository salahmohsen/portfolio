import ExternalLink from "../components/common/externalLink";

export const Data_Sections = [
  "about",
  "certificates",
  "projects",
  "previous experience",
  ["resume", "/resume.pdf"],
];

export const Data_About = () => {
  return (
    <>
      Back in 2012, I decided to try my hand at creating custom Tumblr themes
      and tumbled head first into the rabbit hole of coding and web development.
      Fast-forward to today, and I’ve had the privilege of building software for
      an {<ExternalLink url="#">advertising agency</ExternalLink>}, a{" "}
      {<ExternalLink url="#">start-up</ExternalLink>}, a{" "}
      {<ExternalLink url="#">student-led design studio</ExternalLink>}, and a{" "}
      {<ExternalLink url="#">huge corporation.</ExternalLink>}
      <br />
      <br />
      My main focus these days is building products and leading projects for our
      clients at {<ExternalLink url="#">Upstatement</ExternalLink>}. In my free
      time I’ve also released an{" "}
      {<ExternalLink url="#">online video course</ExternalLink>} that covers
      everything you need to know to build a web app with the Spotify API.
      <br />
      <br />
      When I’m not at the computer, I’m usually rock climbing, hanging out with
      my wife and two cats, or running around Hyrule searching for{" "}
      {<ExternalLink url="#">Korok seeds</ExternalLink>}
    </>
  );
};

export const Data_experience = [
  {
    id: "1",
    company: "TFK",
    title: "Phtoto Editor - Part Time",
    duration: "Jun 2020 - Oct 2023",
    description:
      "I'm responsible for applying TFK guidelines that vary across content types in order to preserve consistency and a visually appealing experience on the website, I.e. standardize background color, Enhance features and figure, remove wrinkles, retouch skin, correct colors, etc... in addition to accelerating the workflow with automation features in photoshop and easing, organizing it with Trello.",
    skills: "",
  },
  {
    id: "2",
    company: "Meyle+Müller GmbH+Co. KG",
    title: "Photo Editor",
    duration: "Sep 2019 - Apr 2020",
    description:
      "I was responsible to retouch, and color-correct product images for many brands like BOSS, BOSCH, Detlev Louis, etc... and facilitating communication between the Bulgaria office and Cairo office in addition to providing supervision and guidance to my team and achieving over 300% increase in our production per day.",
    skills: "",
  },
  {
    id: "3",
    company: "Freelance",
    title: "Photographer & Retoucher",
    duration: "Jan 2014 - Jan 2019",
    description: `In the past few years, I shot more than 150 events mainly weddings and pre-wedding photo sessions. The challenges I've faced during this experience sharpened my photography skills and accumulated a deep understanding of the medium; my eyes became a more detail-oriented and efficient producer of excellent compositions, I've acquired professional skills dealing with a variety of lighting conditions and sophisticated skills in post-processing field, in addition to solid soft skills that helped me directing my photography and get through a lot of stressful situations. 

      I've also published a story titled "Me and the Moulid or a self-portrait through others" on MadaMasr in 2019 and participated in the Shawkan photography and reached the shortlist of competition in the photojournalism category in 2016 with a photo titled "The land protests".`,
    skills: "",
  },
  {
    id: "4",
    company: "3D Khaled Fathy Studio",
    title: "Photo Editor",
    duration: "2015 - 2016",
    description:
      "I was responsible to retouch, color correct, and manipulating indoor wedding shots to make them outdoor shots.",
    skills: "",
  },
  {
    id: "5",
    company: "El-Sa'dany Studio",
    title: "Photographer & Photo Editor",
    duration: "2013 - 2015",
    description:
      "I was handling studio equipment including cameras, lights, and printers, in addition to post-processing, and delivering photos to customers in a timely manner.",
    skills: "",
  },
];
