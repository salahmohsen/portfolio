import Image from "next/image";
import { RxExternalLink } from "react-icons/rx";

const ProjectsItem = ({
  name,
  createdAt,
  imagePATH,
  description,
  technologies,
  projectLink,
}) => {
  return (
    <li className="mb-12">
      <a href={projectLink} target="_blank">
        <article className="group relative grid grid-cols-8 items-center gap-8 pb-1 transition-all duration-200 ease-in-out md:gap-4 lg:hover:!opacity-100  lg:group-hover/list:opacity-50">
          <aside className=" col-span-2 hidden h-full w-full items-center justify-center sm:flex lg:justify-start ">
            <div
              className={` relative flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-night/10 text-3xl text-light transition-all duration-200 ease-linear dark:bg-light/5 sm:h-20 sm:w-20 lg:group-hover:scale-125 lg:group-hover:bg-light dark:lg:group-hover:bg-light dark:lg:group-hover:text-night`}
            >
              <Image
                src={imagePATH}
                fill
                alt="project logo"
                className="p-3 saturate-0 group-hover:saturate-100"
              />
            </div>
          </aside>
          <div className=" col-span-8 sm:col-span-6">
            <header className="mb-2 flex flex-col gap-1 font-bold ">
              <p className="text-xs font-semibold uppercase tracking-wide">
                {createdAt}
              </p>
              <p className="inline-flex items-center gap-1  font-semibold tracking-widest ">
                <span className="tracking-normal">{name}</span>
                <span>
                  <RxExternalLink />
                </span>
              </p>
              <p className="font-normal">{description}</p>
            </header>

            <div className="flex flex-wrap gap-1">
              {technologies.map((technology) => (
                <p
                  key={technology.name}
                  className="flex items-center gap-1 rounded-lg border px-2 py-1 text-xs font-medium uppercase tracking-wide dark:border-light/20 "
                >
                  {technology.icon}
                  {technology.name}
                </p>
              ))}
            </div>
          </div>
        </article>
      </a>
    </li>
  );
};

export default ProjectsItem;
