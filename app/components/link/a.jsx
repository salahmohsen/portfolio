const A = ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lightHref dark:text-nightHref hover:text-orange dark:hover:text-orange font-semibold"
    >
      {children}
    </a>
  );
};

export default A;
