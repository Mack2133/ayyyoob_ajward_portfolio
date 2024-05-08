import ProjectCard from "./ProjectCard";

const projectDatas = [
  {
    title: "SoulNest",
    description: "Chatbot application for mental health patients for get therapy recomendations and to book appointments with therapists.",
    projectType: "Group",
    technologies: ["Flutter", "Django", "MongoDB","DialogFLow" , "Flask", "Jupyter Notebook", "Docker"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest",
    image:"public/img/Counselor_Page.png"
  },
  {
    title: "Book collection CRUD App",
    description: "A simple CRUD app for managing a book collection. ",
    projectType: "Personal",
    technologies: ["React js", "TailwindCSS", "MongoDB","Node js","Express js"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest",
    image:""
  },
  {
    title: "Authentication using JWT",
    description: "A simple authentication system using JWT.",
    projectType: "Personal",
    technologies: ["React js", "TailwindCSS","Shadcnui","MongoDB","Node js","Express js"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest",
    image:""
  },
  {
    title: "Real Estate Website",
    description: "Property selling / renting Website.",
    projectType: "individual",
    technologies: ["React js","Boostrap","React Widgets"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest",
    image:""
  },
  {
    title: "Student Grading System",
    description: "Student Grading System for Schools.",
    projectType: "individual",
    technologies: ["Python"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest",
    image:""
  },
  {
    title: "Food Queue Management System",
    description: "Food Queue Management System for a small business.",
    technologies: ["Java","OOP"],
    projectType: "individual",
    repo: "https://github.com/Team-CURLYBRACES/SoulNest",
    image:""
  },
  {
    title: "Personal Portfolio Website",
    description: "Portfolio Website for showcasing my work.",
    projectType: "Personal",
    technologies: ["React js", "Shadcnui", "TailwindCSS", "EmailJS"],
    repo: "https://github.com/Team-CURLYBRACES/SoulNest",
    image:""
  }
]

function Projects() {
  return (
    <div  className="flex flex-col items-center pt-4 pb-8 md:pt-12 max-sm:px-5">
      <div className="self-start">
        <h1 className="text-3xl font-bold text-zinc-100">Projects</h1>
        <p className="pt-2 text-lg font-medium leading-7 text-zinc-400">Over the past two years, I've undertaken a diverse array of projects, encompassing both collaborative group endeavors and individual assignments. These projects have provided me with invaluable experience and expertise across various domains. Explore my portfolio to discover the range and depth of my contributions.</p>
      </div>
      <div className="w-full py-3">
        {projectDatas.map((projectData, index) => (
          <ProjectCard key={index} 
          title={projectData.title} 
          description={projectData.description} 
          projectType={projectData.projectType} 
          technologies={projectData.technologies} 
          repo={projectData.repo}
          image={projectData.image}
          />
        ))}
      </div>      
    </div>
  );
}

export default Projects;
