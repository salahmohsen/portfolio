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
        <article className="group relative flex items-start gap-7 pb-1 transition-all duration-200 ease-in-out  lg:hover:!opacity-100  lg:group-hover/list:opacity-50">
          <aside
            className={`flex aspect-video h-16 items-center justify-center rounded-md bg-night/50 bg-cover bg-center transition-all duration-200 ease-linear dark:bg-light/5 lg:group-hover:scale-125 lg:group-hover:bg-night dark:lg:group-hover:bg-light dark:lg:group-hover:text-night`}
          >
            <Image
              src={imagePATH}
              width={1895}
              height={906}
              alt="snapshot from a project"
            />
          </aside>
          <div>
            <header className="mb-2 flex flex-col gap-1 font-bold">
              <p className="text-xs font-semibold uppercase tracking-wide">
                {createdAt}
              </p>
              <p className="mb-2 mt-1 flex items-center gap-1 tracking-normal">
                <span>{name}</span>
                <span>
                  <RxExternalLink />
                </span>
              </p>
              <p>{description}</p>
            </header>
            <div>
              <div className="flex flex-wrap gap-1">
                {technologies.map((technology) => (
                  <p
                    key={technology.name}
                    className="inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-xs font-medium uppercase tracking-wide dark:border-light/20"
                  >
                    <span>{technology.icon}</span>
                    <span>{technology.name}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </a>
    </li>
  );
};

export default ProjectsItem;
