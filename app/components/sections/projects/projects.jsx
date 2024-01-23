import projects_data from "@/app/data/projects_data";
import ProjectsItem from "./projectsItem";

const Projects = () => {
  return (
    <ol className="group/list">
      {projects_data.map((el) => (
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
