import React from "react";
import SkillsBox from "./SkillsBox";

const skills = [
  {
    id: 1,
    title: "Frontend",
    stack: ["reactjs", "nextjs", "typescript", "tailwindcss", "bootstrap5", "flutter","html5", "css3"]
  },
  {
    id: 2,
    title: "Backend",
    stack: ["nodejs", "django"]
  },
  {
    id: 3,
    title:"Languages",
    stack:["java","js","python","dart"]
  },
  {
    id: 4,
    title:"DevOps",
    stack:["git","vscode","postman","npm2"]
  },
  {
    id: 5,
    title: "Database",
    stack: ["mongodb", "mysql"]
  },
  {
    id: 6,
    title: "Others",
    stack: ["ps","ai","jira","figma"]
  }
];

function Skills() {
  return (
    <div className="flex flex-col items-center justify-start pt-12 pb-12 bg-gray-100 customSection">
      <h1 className="pb-10 text-5xl font-bold text-center text-blue-600 md:pb-24 lg:text-7xl md:text-5xl md:pt-12">
        Skills
      </h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
        {skills.map((skill) => {
          return <SkillsBox key={skill.id} title={skill.title} stacks={skill.stack} />;
        })}
      </div>

    </div>
  );
}

export default Skills;
