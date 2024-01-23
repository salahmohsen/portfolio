import ExperienceItem from "./experienceItem";
import ExternalLink from "../../common/externalLink";
import experience_data from "@/app/data/experience_data";

const Experience = () => {
  return (
    <>
      <ol className="group/list">
        {experience_data.map((el) => (
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
      <div className="mt-10 flex gap-1">
        <ExternalLink url={"/resume.pdf"} icon={true}>
          View Full Résumé
        </ExternalLink>
      </div>
    </>
  );
};

export default Experience;
