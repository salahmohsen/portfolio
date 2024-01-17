import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";

const SocialMediaButton = ({ socialmedia, username = undefined }) => {
  const socailmediaList = {
    facebook: {
      icon: <RiFacebookLine />,
      url: `https://www.facebook.com/${username}`,
    },
    instagram: {
      icon: <RiInstagramLine />,
      url: `https://www.instagram.com/${username}`,
    },
    linkedin: {
      icon: <RiLinkedinLine />,
      url: `https://www.linkedin.com/in/${username}`,
    },
    twitter: {
      icon: <RiTwitterLine />,
      url: `https://www.twitter.com/${username}`,
    },
    github: {
      icon: <RiGithubLine />,
      url: `https://www.github.com/${username}`,
    },
  };
  const { icon, url } = socailmediaList[socialmedia];

  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex aspect-square h-9 w-9 items-center justify-center rounded-md bg-transparent text-night/70 outline outline-1 outline-night/5 transition-all duration-200 ease-in-out hover:bg-night/5 dark:text-light/70 dark:outline-light/5 dark:hover:bg-light/5"
      >
        {icon}
      </a>
    </li>
  );
};

export default SocialMediaButton;