import { Data_Projects } from "@/app/data/data";
import ProjectsItem from "./projectsItem";

const Projects = () => {
  return (
    <ol className="group/list">
      {Data_Projects.map((el) => (
        <ProjectsItem
          key={el.id}
          name={el.name}
          createdAt={el.createdAt}
          imagePATH={el.imagePATH}
          description={el.description}
          technologies={el.technologies}
          projectLink={el.projectLink}
        />
      ))}
    </ol>
  );
};

export default Projects;
