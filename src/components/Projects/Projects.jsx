import ProjectCard from "./ProjectCard";
import projectDatas from "./projectsData";
import { motion } from "framer-motion"

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y:100
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 0.4,
      delay: 0.10
    },
  }
}

function Projects() {
  return (
    <div  className="flex flex-col items-center pt-4 pb-8 md:pt-12 max-sm:px-5">
      <div className="self-start">
        <h1 className="text-3xl font-bold text-zinc-100">Projects</h1>
        <p className="pt-2 text-lg font-medium leading-7 text-zinc-400">Over the past two years, I've undertaken a diverse array of projects, encompassing both collaborative group endeavors and individual assignments. These projects have provided me with invaluable experience and expertise across various domains. Explore my portfolio to discover the range and depth of my contributions.</p>
      </div>
      <div className="w-full py-3">
        {projectDatas.map((projectData, index) => (
          <motion.div 
            variants={fadeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={
              {once: true}
            }
            key={index}
          
          >
          <ProjectCard
          // key={index} 
          title={projectData.title} 
          description={projectData.description} 
          projectType={projectData.projectType} 
          technologies={projectData.technologies} 
          repo={projectData.repo}
          image={projectData.image}
          />
          </motion.div>
        ))}
      </div>      
    </div>
  );
}

export default Projects;
