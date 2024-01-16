const ExternalLink = ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lightHref dark:text-nightHref hover:text-orange dark:hover:text-orange font-semibold transition-colors duration-200 ease-in-out"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
