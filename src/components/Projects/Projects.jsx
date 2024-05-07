import ProjectCard from "./ProjectCard";

const projectDatas = [
  {
    title: "SoulNest",
    description: "Chatbot application for mental health support. ",
    projectType: "Group",
    technologies: ["MERN Stack", "JWT", "Bcrypt"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest"
  },
  {
    title: "book collection CRUD App",
    description: "A simple CRUD app for managing a book collection. ",
    projectType: "Individual",
    technologies: ["React", "Bootstrap"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest"
  },
  {
    title: "Authentication using JWT",
    description: "A simple authentication system using JWT.",
    projectType: "Individual",
    technologies: ["Java", "OOP",],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest"
  },
  {
    title: "Real Estate Website",
    description: "Property selling / renting Website.",
    technologies: ["Python"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest"
  },
  {
    title: "Student Grading System",
    description: "Student Grading System for Schools.",
    technologies: ["React", "TailwindCSS", "Figma"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest"
  },
  {
    title: "Food Queue Management System",
    description: "Food Queue Management System for a small business.",
    technologies: ["React", "TailwindCSS", "Figma"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest"
  },
  {
    title: "Personal Portfolio Website",
    description: "Portfolio Website for showcasing my work.",
    technologies: ["React", "NextUI", "TailwindCSS", "EmailJS"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest"
  }
]

function Projects() {
  return (
    <div  className="flex flex-col items-center pt-4 pb-8 md:pt-12 max-sm:px-5">
      <div className="self-start">
        <h1 className="text-3xl font-bold text-zinc-100">Projects</h1>
        <p className="pt-2 text-lg font-medium leading-7 text-zinc-400">I have worked on a variety of projects over the years some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on.</p>
      </div>
      <div className="w-full py-3">
        {projectDatas.map((projectData, index) => (
          <ProjectCard key={index} 
          title={projectData.title} 
          description={projectData.description} 
          projectType={projectData.projectType} 
          technologies={projectData.technologies} 
          repo={projectData.repo}/>
        ))}
      </div>      
    </div>
  );
}

export default Projects;
