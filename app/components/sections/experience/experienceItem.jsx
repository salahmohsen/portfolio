import ExternalLink from "../../common/externalLink";
import { VscLinkExternal } from "react-icons/vsc";

const ExperienceItem = ({
  company,
  title,
  duration,
  description,
  skills,
  link,
}) => {
  return (
    <li className="mb-12">
      <ExternalLink url={link} className={"!text-night"} colored={false}>
        <article className=" group relative grid scale-100 pb-1 transition-all duration-200 ease-in-out sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!scale-105 lg:hover:!opacity-100 lg:group-hover:scale-75 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-4 -z-0 hidden rounded-lg lg:-inset-x-6 lg:block lg:group-hover:border lg:group-hover:bg-night/0 lg:group-hover:drop-shadow-lg dark:lg:group-hover:border-light/5 dark:lg:group-hover:bg-light/5"></div>
          <header className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 ">
            {duration}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="mb-2 inline-flex items-baseline gap-2 font-medium leading-tight ">
              <span>{title}</span>
              <span>•</span>
              <span>{company}</span>
              <span className="relative -bottom-0.5  transition-all duration-100 ease-in-out ">
                <VscLinkExternal />
              </span>
            </h3>
            <p className="z-10 text-sm font-normal leading-normal ">
              {description}
            </p>
          </div>
        </article>
      </ExternalLink>
    </li>
  );
};

export default ExperienceItem;
