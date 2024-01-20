import Image from "next/image";
import ExternalLink from "../../common/externalLink";
import { RxExternalLink } from "react-icons/rx";

const CertificateItem = ({
  name,
  issuingOrganization,
  certificateLink,
  issueDate,
  skills,
  organizationIcon,
}) => {
  const svgComponent =
    typeof organizationIcon === "object" ? organizationIcon : null;
  const regularImage =
    typeof organizationIcon === "string" ? (
      <Image
        src={organizationIcon}
        alt="Organisation issued the certificate"
        width={24}
        height={24}
        className="dark:lg:group-hover:invert"
      />
    ) : null;

  return (
    <li className="mb-12">
      <a href={certificateLink} target="_blank">
        <article className="group relative grid grid-cols-8 items-center gap-8 pb-1 transition-all duration-200 ease-in-out md:gap-4 lg:hover:!opacity-100  lg:group-hover/list:opacity-50">
          <aside className=" col-span-2 hidden h-full w-full items-center justify-center sm:flex lg:justify-start ">
            <div
              className={` flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-night/50 text-3xl text-light transition-all duration-200 ease-linear dark:bg-light/5 sm:h-20 sm:w-20 lg:group-hover:scale-125 lg:group-hover:bg-night dark:lg:group-hover:bg-light dark:lg:group-hover:text-night`}
            >
              {svgComponent || regularImage}
            </div>
          </aside>
          <div className=" col-span-8 sm:col-span-6">
            <header className="flex flex-col gap-1 font-bold">
              <p className="text-xs font-semibold uppercase tracking-wide">
                {issueDate}
              </p>
              <p className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest">
                <span className="mr-0 flex h-5 w-5 items-center text-lg sm:hidden">
                  {svgComponent || regularImage}
                </span>
                <span>{issuingOrganization}</span>
                <span>
                  <RxExternalLink />
                </span>
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
          </div>
        </article>
      </a>
    </li>
  );
};

export default CertificateItem;
