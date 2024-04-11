import CustomCard from "../Common/CustomCard";
import  projectsData  from "./projectsData";


function Projects() {
  return (
    <div className="flex flex-col items-center justify-start pb-24 bg-gray-200 customSection md:pt-12" id="projects">
      <div>
        <h1 className="pt-12 pb-12 text-5xl font-bold text-center text-blue-600 md:pb-24 lg:text-7xl md:text-5xl">
          Projects
        </h1>
        <div className="z-0 grid grid-cols-1 gap-5 px-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-5 md:px-0">
          {projectsData.map((project) => (
            <CustomCard
              key={project.id}
              title1={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
