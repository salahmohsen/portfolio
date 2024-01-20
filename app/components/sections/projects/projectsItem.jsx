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
        <article className="group relative grid grid-cols-8 items-start gap-4 pb-1 transition-all duration-200 ease-in-out lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <aside
            className={`relative order-2 col-span-8 mb-2 flex aspect-video h-24 items-center justify-center transition-all duration-200 ease-linear  md:order-1 md:col-span-2 lg:h-16 lg:group-hover:scale-110 `}
          >
            <Image
              src={imagePATH}
              fill
              loading="lazy"
              alt="snapshot from a project"
              className="rounded-sm bg-center object-contain saturate-0 group-hover:saturate-100 "
            />
          </aside>

          <header className="order-1 col-span-8 flex flex-col gap-1 font-bold md:order-2 md:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wide">
              {createdAt}
            </p>
            <p className="mb-1 mt-1 flex items-center gap-1 tracking-normal">
              <span>{name}</span>
              <span>
                <RxExternalLink />
              </span>
            </p>
            <p>{description}</p>
            <div className="mt-1 flex flex-wrap gap-1">
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
          </header>
        </article>
      </a>
    </li>
  );
};

export default ProjectsItem;
