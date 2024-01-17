const ExternalLink = ({ children, url, className, colored = true }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${colored ? "text-lightHref hover:text-orange dark:text-nightHref dark:hover:text-orange" : ""} font-semibold  transition-colors duration-200 ease-in-out   `}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
