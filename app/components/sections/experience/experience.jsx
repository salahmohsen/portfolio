import { Data_experience } from "@/app/data/data";
import ExperienceItem from "./experienceItem";

const Experience = () => {
  return (
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
  );
};

export default Experience;
