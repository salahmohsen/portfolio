import { Data_experience } from "@/app/data/data";
import ExperienceItem from "./experienceItem";
import ExternalLink from "../../common/externalLink";

const Experience = () => {
  return (
    <>
      <ol className="group/list">
        {Data_experience.map((el) => (
          <ExperienceItem
            key={el.id}
            company={el.company}
            title={el.title}
            duration={el.duration}
            description={el.description}
            skills={el.skills}
            link={el.link}
          />
        ))}
      </ol>
      <div className="flex gap-1">
        <ExternalLink url={"/resume.pdf"} icon={true}>
          View Full Résumé
        </ExternalLink>
      </div>
    </>
  );
};

export default Experience;
