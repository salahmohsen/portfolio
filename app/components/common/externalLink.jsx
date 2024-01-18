import { RxExternalLink } from "react-icons/rx";

const ExternalLink = ({
  children,
  url,
  className,
  colored = true,
  icon = false,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${colored ? "text-lightHref hover:text-orange dark:text-nightHref dark:hover:text-orange" : ""} inline-flex items-center gap-1 font-semibold transition-colors duration-200 ease-in-out`}
    >
      <span>{children}</span>
      {icon && (
        <span>
          <RxExternalLink />
        </span>
      )}
    </a>
  );
};

export default ExternalLink;
