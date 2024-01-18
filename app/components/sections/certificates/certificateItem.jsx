import { RiGoogleLine } from "react-icons/ri";
import { SiUdemy } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";

const CertificateItem = ({
  key,
  name,
  issuingOrganization,
  certificateLink,
  issueDate,
  skills,
}) => {
  return (
    <li className="mb-12">
      <article className="group relative scale-100 pb-1 transition-all duration-200 ease-in-out lg:hover:!scale-105 lg:hover:!opacity-100 lg:group-hover:scale-75 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-4 -z-0 hidden rounded-lg lg:-inset-x-6 lg:block lg:group-hover:border lg:group-hover:bg-night/0 lg:group-hover:drop-shadow-lg dark:lg:group-hover:border-light/5 dark:lg:group-hover:bg-light/5"></div>
        <header className="flex flex-col gap-1 font-bold">
          <p className="text-xs font-semibold uppercase tracking-wide">
            {issueDate}
          </p>
          <p className="text-xs font-semibold tracking-widest">
            {issuingOrganization}
          </p>
          <p className="mb-2 mt-1 tracking-normal">{name}</p>
        </header>
        <div>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <p
                key={skill}
                className="rounded-lg border px-2  py-1 text-xs font-medium uppercase tracking-wide dark:border-light/20 "
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </article>
    </li>
  );
};

export default CertificateItem;
