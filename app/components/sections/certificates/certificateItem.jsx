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
        <article className="group relative flex items-center gap-7 pb-1 transition-all duration-200 ease-in-out  lg:hover:!opacity-100  lg:group-hover/list:opacity-50">
          <aside
            className={`flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-night/50 text-3xl text-light transition-all duration-200 ease-linear dark:bg-light/5 lg:group-hover:scale-125 lg:group-hover:bg-night dark:lg:group-hover:bg-light dark:lg:group-hover:text-night`}
          >
            {svgComponent || regularImage}
          </aside>
          <div>
            <header className="flex flex-col gap-1 font-bold">
              <p className="text-xs font-semibold uppercase tracking-wide">
                {issueDate}
              </p>
              <p className="text-xs font-semibold tracking-widest">
                {issuingOrganization}
              </p>
              <p className="mb-2 mt-1 flex items-center gap-1 tracking-normal">
                <span>{name}</span>
                <span>
                  <RxExternalLink />
                </span>
              </p>
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
